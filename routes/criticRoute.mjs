import express from "express";
import Crtic from '../models/criticSchema.mjs';

const router = express.Router();

//get all kids details
router.get('/', async (req, res) => {
    const allCritic = await Critic.find({});
    res.json(allCritic);
})

//update Kids details
router.patch('/:id', async (req, res) => {
    const updatedCrtic = req.body;
    const results = await Critic.findByIdAndUpdate(req.params.id, updatedCritic, { new: true });
    res.json(results);
})

export default router;