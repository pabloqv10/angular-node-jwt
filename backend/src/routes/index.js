const { Router } = require('express');
const router = Router();

const { signUp, signIn } = require('../controllers/user');
const { getTasks } = require('../controllers/task');
const { verifyToken } = require('../middlewares/auth');

router.get('/', (req, res) => res.send('Hello World'));
router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/tasks', getTasks);
router.get('/private-tasks', verifyToken, getTasks);

module.exports = router;
