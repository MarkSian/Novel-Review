import express from "express";
import { novel, critic, authors } from '../utilities/data.mjs';
import Author from '../models/authorsSchema.mjs';
import Critic from '../models/criticSchema.mjs';
import Novel from '../models/novelSchema.mjs';


const router = express.Router();

router.get('/', async (req, res) => {
    // Delete all data
    await Author.deleteMany({});
    await Critic.deleteMany({});
    await Novel.deleteMany({});

    await Author.create(authors).catch(err => {
        console.error('Error Seeding Authors:', err);
    });
    await Critic.create(critic);
    await Novel.create(novel);

    res.send('Data Seeded To DB!');
});

export default router;