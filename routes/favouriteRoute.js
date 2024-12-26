import express from 'express';
import { saveFavourite, getFavourites } from '../controllers/favouritePostal.js';

export const favouritesRoutes = express.Router();

favouritesRoutes.post('/', saveFavourite);
favouritesRoutes.get('/', getFavourites);
