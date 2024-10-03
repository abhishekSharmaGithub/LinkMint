import { Router } from "express";
import Url from "../models/Url";

const router = Router();


router.get('/:code',async(req,res): Promise<void> =>{
    try {
        const url = await Url.findOne({urlCode:req.params.code});

        if(url) {
            res.redirect(url.longUrl);
            return ;
        } else {
            res.status(404).json('No url found');
            return ;
        }
    } catch(err:unknown) {
        console.error(err);
        res.json(500).json('server not found');

    }
});

export default router;