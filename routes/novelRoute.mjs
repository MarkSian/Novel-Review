import express from "express";
import Novel from '../models/novelSchema.mjs';

const router = express.Router();

// search novel by genre using query params
router.get('/search', async (req, res) => {
    const genre = req.query.genre;
    const results = await Novel.find({ genre: genre })
    res.json(results);
})

// retrieve a story by id
router.get('/:id', async (req, res) => {
    const selectedNovel = await Novel.findById(req.params.id);
    res.json(selectedNovel);
})



export default router;