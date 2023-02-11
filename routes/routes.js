import { Router } from "express";
import getData from "../controllers/getData.js";
import {addCustomer,getCustomers} from '../controllers/CustomerController.js';
import {getAccounts,addAccount} from "../controllers/AccountController.js"
const router = Router();

// Accounts Routes
router.get("/getAccounts", getAccounts);
router.post("/addAccount", addAccount);

// Customer Routes
router.get("/getCustomers", getCustomers);
router.post("/addCustomer", addCustomer);
// Get customer by username
router.get("/:id", getData);

export default router;