import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const tokens = ['d4973653-9895-4123-a7dd-3e1387d0fbde'];

// const user = {
//   username: 'romain',
//   password: '123456',
// };


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

/**
 *
 * @param {object} credentials
 * @param {string} credentials.username
 * @param {string} credentials.password
 */
async function login(credentials) {
  const user = await User.findOne({ username: credentials.username });
  if (user && user.password === credentials.password) {
    const token = uuid();
    tokens.push(token);
    return Promise.resolve(token);
  }

  return Promise.resolve(null);
}

async function createUser(credentials) {
  const existingUser = await User.findOne({ username: credentials.username });
  if (existingUser) {
    throw new Error('Username already exists');
  }
  const user = new User({
    username: credentials.username,
    password: credentials.password,
  });
  await user.save();
  return user;
}

export { login, createUser, tokens };
