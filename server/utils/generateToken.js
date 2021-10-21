import jwt from 'jsonwebtoken'

//const JWT_SECRET="sdjkfh8923yhjdksbfma@#*!^#&@bhab2qiuhesdbhesdbhjdsfg839hjkl";

const generateToken = (id) => {  
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default generateToken