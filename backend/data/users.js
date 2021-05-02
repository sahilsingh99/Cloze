import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sahil Kundu',
    email: 'sahil@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Samarth Gupta',
    email: 'sammy@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
