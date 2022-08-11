import {Router} from 'express';
import DatabaseController from '../controllers/DatabaseController';
import authenticateToken from '../middlewares/authenticateToken';

const router = Router();

router.post('/login', /* middlewares, */ DatabaseController.login);
router.get('/', DatabaseController.getAll);
router.post('/new', DatabaseController.create);
router.delete('/:id', DatabaseController.delete)

router.use(authenticateToken);

router.get('/projects', DatabaseController.getProjects);
router.get('/types', DatabaseController.getTypes);

export default router;