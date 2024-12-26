import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { searchRoutes } from './routes/searchRoute.js';
import { favouritesRoutes } from './routes/favouriteRoute.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/search', searchRoutes);
app.use('/favourites', favouritesRoutes)


// Start server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});