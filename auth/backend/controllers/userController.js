import { User } from "../model/userModel.js";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send("All fields are mandatory");
    }

    // if user already exist  then no need to create new user
    const olduser = await User.findOne({ email });
    if (olduser) {
      res.status(409).send({ message: "User already exists !!" });
    }

    // we store the user hashed password to our database for security
    const encryptedPassword = await bcrpyt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });
    // now we generate the token
    const token = await jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    // now we save the user taken
    user.token = token;
    res.status(201).json({ message: "User created Successfully", user });
  } catch (err) {
    console.log(err.message);
    res.status(404).json(err.message);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "All fields are manadatory" });
    }
    // checking that user exist in our database or not
    const user = await User.findOne({ email });
    if (user === false) {
      return res.status(409).json({ message: "User does not exist!!" });
    }

    const hashedPassword = await bcrpyt.compare(password, user.password);
    if (user && hashedPassword) {
      // creating the token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      user.token = token;
      res.status(200).json({ message: "Login successfully", user });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(404).json(err.message);
  }
};
