// import { app } from "./app.js";
// import { connectDB } from "./db/index.js";

// connectDB()
//     .then(() => {
//         const port = process.env.PORT || 5000
//         app.listen(port, () => {
//             console.log(`Server is running at port: ${port}`)
//         })
//     })
//     .catch ((err) => (
//         console.log(`An error while connecting the db ${err}`)
//     ))



import { app } from "./app.js";
import { connectDB } from "./db/index.js";

export default async function handler(req, res) {
    try {
        await connectDB();
        return app(req, res);
    } catch (err) {
        console.error("Database connection error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
