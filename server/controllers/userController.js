const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/User")
require('dotenv').config();

exports.getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find({});
        res.json(allUsers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

exports.registerUser = async(req, res)=>{

    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email});

        //Generate HashPassword
        const saltRounds = 10;  
        const hashPassword = await bcrypt.hash(password,saltRounds)

        if(user){
            res.status(404).json({'message': 'user alrady exist'})
        } else{
            const newUser = new User({name, email, password:hashPassword})
            await newUser.save();
            res.status(201).json({'message': 'Registered Successfully'});
        }
    } catch (error) {
        console.log(error)
    }
}

exports.loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const token = jwt.sign({ userId: user._id, userEmail: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } else {
            return res.status(404).json({message: "Wrong Password"})
        }

    } catch (error) {
        console.log(error)
    }
}
