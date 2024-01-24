import { Router } from 'express';
import { User } from '../app/controllers/User';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';

const router = Router();
const userController = new User();

routes.get("/", userController.index);
routes.get("/:id", userController.search);

routes.post(
  "/signup",
  validateRequest({
    body: z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    })
  }),
  userController.create
);

routes.post("/books/new", userController.newBook);

export default router;
