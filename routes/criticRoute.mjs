import express from "express";
import Critic from '../models/criticSchema.mjs';

const router = express.Router();

// Get all critic details
router.get('/', async (req, res) => {
    const allCritic = await Critic.find({});
    res.json(allCritic);
})

// Update critic details
router.patch('/:id', async (req, res) => {
    const updatedCritic = req.body;
    const results = await Critic.findByIdAndUpdate(req.params.id, updatedCritic, { new: true });
    res.json(results);
})

export default router;