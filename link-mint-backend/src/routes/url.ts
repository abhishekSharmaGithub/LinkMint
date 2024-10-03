import { Router, Request, Response } from "express";
import validUrl from 'valid-url';
import shortid from 'shortid';
import Url from "../models/Url";

const router = Router();
const baseUrl = 'http://localhost:5000';



router.post('/shorten', async (req:Request, res:Response): Promise<void> =>{
    const {longUrl} = req.body;

    if(!validUrl.isUri(longUrl)){
         res.status(400).json({error: 'Invalid Long Url'});
         return
    }

    try {
        const urlCode = shortid.generate();
        let url = await Url.findOne({longUrl});

        if(url) {
             res.json(url);
             return ;
        }

        const shortUrl = `${baseUrl}/${urlCode}`;
        url = new Url({ longUrl, shortUrl, urlCode});

        await url.save()
        res.json(url);
    }catch(err:unknown) {
        console.error(err);
        res.status(500).json('server error');
    }

});

export default router;