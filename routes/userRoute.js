const express = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  loginStatus,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
} = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/getUser', protect, getUser);
router.get('/loggedin', loginStatus);
router.put('/updateuser', protect, updateProfile);
router.put('/changepassword', protect, changePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resetToken', resetPassword);

module.exports = router;
