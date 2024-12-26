import { db } from '../db/connection.js';

// Save a favourite postal code
export const saveFavourite = async (req, res) => {
    const { name, branchType, deliveryStatus, district, region, state } = req.body;

    try {
        const query = `
            INSERT INTO favourites (name, branch_type, delivery_status, district, region, state)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        await db.execute(query, [name, branchType, deliveryStatus, district, region, state]);
        res.status(201).json({ message: 'Favourite added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save favourite' });
    }
};

// Get all favourites postal code
export const getFavourites = async (_req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM favourites');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch favourites' });
    }
};
