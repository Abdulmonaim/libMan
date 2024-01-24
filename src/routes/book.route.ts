import { Router } from 'express';
import { Book } from '../app/controllers/Book';

const router = Router();
const bookController = new Book();

router.get("/", bookController.index);
router.get("/:name", bookController.searchBook);
router.post("/", bookController.create);
router.put("/", bookController.updateBook);

export default router;
