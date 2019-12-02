const jwt = require('jsonwebtoken');

const User = require('../../models/User');

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;
  
  const newUser = new User({
    email,
    password
  });

  await newUser.save();

  const token = jwt.sign({ _id: newUser._id }, 'secretKey');

  return res.status(200).json({ token });
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ message: "The email doesn't exists" });
  if (user.password !== password) return res.status(401).json({ message: 'Wrong password' });

  const token = jwt.sign({ _id: user._id }, 'secretKey');

  return res.status(200).json({ token });
};
