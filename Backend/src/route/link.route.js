import { Router } from "express";
import { addLinksAndShop, editLinkAndShop, deleteLinkAndShop, countClicksOnLinksAndPost } from "../controller/links.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";


const router = Router();

router.route('/add-link').post(verifyjwt, addLinksAndShop)
router.route('/edit-link/:id').patch(verifyjwt, editLinkAndShop)
router.route('/delete-link/:id').delete(verifyjwt, deleteLinkAndShop)
router.route('/count-clicks/:id').get(verifyjwt, countClicksOnLinksAndPost)

export default router;