import express from 'express';
import { addPurchase, deletePurchase, getAllPurchases, updatePurchase } from '../controllers/purchaseController.js';
import { checkUserLogin, isAdmin } from '../middlewares/middleware.js';

const purchaseRoute = express.Router();

// Purchase routes
purchaseRoute.post('/add', checkUserLogin, isAdmin, addPurchase);
purchaseRoute.get('/getAll', checkUserLogin, isAdmin, getAllPurchases);
purchaseRoute.put('/edit/:id', checkUserLogin, isAdmin, updatePurchase);
purchaseRoute.delete('/delete/:id', checkUserLogin, isAdmin, deletePurchase);

export default purchaseRoute;