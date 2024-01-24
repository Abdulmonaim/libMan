import { Router } from 'express';
import { Sessions } from '../app/controllers/Sessions';

const router = Router();
const sessionController = new Sessions();

routes.post("/login", sessionController.create);
routes.post("/logout", sessionController.delete);

export default router;
