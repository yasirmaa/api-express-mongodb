import User from '../model/User';
import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: 'User not found' });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: 'User Aready exists' });
  }

  //   const hashedPassword = bcrypt.hashSync(password,10);

  const user = new User({
    name,
    email,
    password,
    blogd: [],
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: 'Not found' });
  }

  //   const isPasswordCorrect = compare(password, existingUser.password);
  //   if (!isPasswordCorrect) {
  //     return res.status(400).json({ message: 'Incorrect password' });
  //   }
  return res.status(200).json({ message: 'Login successfull' });
};
