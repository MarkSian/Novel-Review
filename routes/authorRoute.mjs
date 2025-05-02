import express from "express";
import Author from '../models/authorsSchema.mjs';

const router = express.Router();

//create a new author 
router.post('/', async (req, res) => {
    const newAuthor = await Author.create(req.body);
    res.status(201).json({
        message: 'New author created',
        Details: newAuthor
    });
})

//delete author details from DB
router.delete('/:id', async (req, res) => {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    res.json({
        message: "Author deleted from DB!",
        Details: deletedAuthor
    })
})

export default router;