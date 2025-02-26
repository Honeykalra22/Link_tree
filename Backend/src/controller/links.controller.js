import { Link } from "../models/link.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"

export const addLinksAndShop = asyncHandler(async (req, res) => {
    const { link, label } = req.body
    const userId = req.user._id

    if (!link || !label) {
        throw new apiError(400, "All fields are required")
    }

    const newLink = new Link({
        link,
        label,
        userId
    })

    await newLink.save()

    return res
        .status(201)
        .json(new apiResponse(201, newLink, "Link is added successfully"))
})

export const editLinkAndShop = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { link, label } = req.body

    const newLink = await Link.findByIdAndUpdate(
        id,
        { link, label },
        { new: true }
    );

    if (!newLink) {
        throw new apiError(404, "Link not found")
    }

    return res
        .status(200)
        .json(new apiResponse(200, newLink, "Link is updated successfully"))
})

export const deleteLinkAndShop = asyncHandler(async (req, res) => {
    const { id } = req.params
    const link = await Link.findByIdAndDelete(id)

    if (!link) {
        throw new apiError(404, "Link not found")
    }

    return res
        .status(200)
        .json(new apiResponse(200, link, "Link is deleted successfully"))
})

export const countClicksOnLinks = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    const link = await Link.findById(id);

    if (!link) {
        throw new apiError(404, "Link not found");
    }

    if (userId.toString() === link.userId.toString()) {
        return res.status(200).json(new apiResponse(200, link, "Owner cannot increase views"));
    }

    if (!link.viewedBy.some(viewedId => viewedId.toString() === userId.toString())) {
        await Link.findByIdAndUpdate(id, {
            $inc: { click_count: 1 },
            $push: { viewedBy: userId }
        });
    }

    return res.status(200).json(new apiResponse(200, link, "Link is clicked successfully"));
});
