import express from "express";
import { getUser, createUser, getUserByFirebaseUID} from "../controllers/users.js";

const router = express.Router()

// router.get('/', getAllUsers)
router.post('/', createUser)

router.get('/:username', getUser)

router.get('' , getUserByFirebaseUID)




export default router