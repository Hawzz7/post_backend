import express from 'express';
import fetch from 'node-fetch';

export const searchRoutes = express.Router();

searchRoutes.get('/', async (req, res) => {
    const { query, type } = req.query;

    // Construct the appropriate URL based on type
    let apiUrl;
    if (type === 'name') {
        apiUrl = `https://api.postalpincode.in/postoffice/${query}`;
    } else if (type === 'code') {
        apiUrl = `https://api.postalpincode.in/pincode/${query}`;
    } else {
        return res.status(400).json({ error: 'Invalid type. Use "name" or "code".' });
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Ensure proper data structure
        if (!Array.isArray(data) || data.length === 0 || data[0].Status !== 'Success') {
            return res.status(404).json({ error: 'No results found for the provided query.' });
        }

        res.json(data); // Return the first result for simplicity
    } catch (error) {
        console.error('Error fetching postal API:', error);
        res.status(500).json({ error: 'Failed to fetch data from postal API' });
    }
});

