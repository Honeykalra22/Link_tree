import { User } from "../models/user.model.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import crypto from 'crypto'
import bcrypt from 'bcrypt'


const GenerateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        // await user.save({validateBeforeSave: false})
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken };
    } catch (error) {
        throw new apiError(500, "Something went wrong while generating tokens")
    }
}

export const registerUser = asyncHandler(async (req, res) => {
    const {accept} = req.body;
    if(!accept) {
        throw new apiError(400, "Policy acceptance is neccasory")
    }
    const { username, email, password, firstName, LastName } = req.body;

    if (!username || !email || !password || !username?.trim() || !email?.trim() || !password?.trim() || !firstName || !LastName) {
        throw new apiError(500, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new apiError(401, "User is already registered");
    }

    const user = await User.create({
        username,
        email,
        password,
        firstName,
        LastName,
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {
        throw new apiError(401, "Somethign went wrong")
    }

    return res
        .status(201)
        .json(new apiResponse(201, createdUser, "User is registered successfully"))

})


export const loginUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    const user = await User.findOne(
        {
            $or: [{ username }, { email }]
        }
    )
    if (!user) {
        throw new apiError(400, "User is not registered");
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new apiError(400, "Password is Not Correct");
    }

    const { accessToken, refreshToken } = await GenerateAccessAndRefreshToken(user._id);

    const loginUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: false,
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new apiResponse(
                200,
                {
                    user: loginUser,
                    accessToken,
                    refreshToken
                },
                "User is login successfully"
            )
        )
})

export const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          refreshToken: '',
          accessToken: '',
        },
      },
      {
        new: true,
      }
    );
  
    const options = {
      httpOnly: true,
      secure: true,
    };
  
    return res
      .status(200)
      .cookie("accessToken", options)
      .cookie("refreshToken", options)
      .json(new apiResponse(200, "user log out succesfully"));
  });

export const forgetPasswordRecoveryByEmail = asyncHandler(async (req, res) => {

    const { email } = req.body;

    const user = await User.findOne({email})
    if (!user) {
        throw new apiError(404, "User is not registed");
    }
    // console.log(user)

    const resetToken = user.generateResetPasswordToken()
    // console.log(typeof resetToken)
    await user.save()

    const resetURL = `${req.protocol}://${req.get("host")}/api/auth/reset-password/${resetToken}`;
    const message = `Click the link below to reset your password:\n\n${resetURL}\n\nThis link is valid for 15 minutes.`;

    try {
        await sendEmail(user.email, "Password Reset Request", message);
        res.status(200).json({ message: "Reset password email sent" });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        throw new apiError(500, "Email is not sent")
    }

})

export const resetPassword = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body


    if (!newPassword) {
        throw new apiError(400, "Password is required")
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")
    const user = User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }
    })

    if (!user) {
        throw new apiError(404, "Token is invalid")
    }

    user.password = bcrypt.hash(newPassword, 10)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()

    return res
        .status(200)
        .json(new apiResponse(200, {}, "Password is reset successfully"))
})
