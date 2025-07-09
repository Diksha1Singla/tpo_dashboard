import {userdb} from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const isValidPasswordType = (password) => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password)
  );
};

const isValidEmailType = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const home = async(req,res)=>{
    try {
        return res.status(200).send("Welcome to Suvidha Foundation")
    } catch (error) {
        return res.status(404).send("Page not found : authController.home")
    }
}

const register = async(req,res)=>{
try {
    const { username, college, email, password } = req.body;
    // email = req.body.email?.trim().toLowerCase();
    // username = req.body.username?.trim();
    // college = req.body.college?.trim();

    if(!username || !college || !email || !password){
      return res.status(400).json({
        error: "Missing filed found!!"
      });
    }

    if(!isValidEmailType(email)){
      return res.status(400).json({ error: "Invalid email format" });
    }

    if(!isValidPasswordType(password)){
      return res.status(400).json({
        error: "Password must be at least 8 chars, include 1 capital, 1 number & 1 special char"
      });
    }

    const [existingUser] = await userdb.execute(
      "SELECT * FROM userDataEntries WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userdb.execute(
      "INSERT INTO userDataEntries (username, college, email, password) VALUES (?, ?, ?, ?)",
      [username, college, email, hashedPassword]
    );

    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
      return res.status(400).json({
        error: "Missing filed found!! Please enter email and password"
      });
    }
    const [row] = await userdb.execute(
      "SELECT * FROM userDataEntries WHERE email = ?",
      [email]
    )
    const user = row[0]
    if(!user){
        return res.status(400).json({Error:"Invalid credentials"})
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      userId: user.id.toString(),
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal Server Error in Login" });
  }
};


export default {login, home, register}