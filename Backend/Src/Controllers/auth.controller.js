import { createAccessToken } from '../Libs/jwt.js';
import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';

import Tecnico from '../Models/tecnico.models.js';
import { TOKEN_SECRET } from '../config.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const userFound = await User.findOne({ email });
        if (userFound) return res.status(404).json( ["The Email already in use"] );

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });
        
        res.cookie("token", token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            updateAt: userSaved.updateAt,
        });
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const techRegister = async (req, res) => {
    const { name, email, password, number } = req.body;

    try {
        const techFound = await Tecnico.findOne({email});
        if (techFound) return res.status(406).json([ "The Email already exist, in use" ]);

        const passwordHash = await bcrypt.hash(password, 11);

        const newTech =  new Tecnico({
            name,
            email,
            password: passwordHash,
            number,
        });

        const techSaved = await newTech.save();

        const token = await createAccessToken({ id: techSaved._id });

        res.cookie("token", token);
        res.json({
            id: techSaved._id,
            name: techSaved.name,
            email: techSaved.email,
            createAt: techSaved.createdAt,
            updateAt: techSaved.updateAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMath = await bcrypt.compare(password, userFound.password);
        if (!isMath) return res.status(400).json({ message: "Incorrect Password" });

        const token = await createAccessToken({ id: userFound._id });
        
        res.cookie("token", token);

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            updateAt: userFound.updateAt,
        });
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if(!userFound) return res.status(400).json({ "Message": "User not found" })

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createAt: userFound.createAt,
        updateAt: userFound.updateAt,
    })
};

export const verifyToken = async (req, res) => {
    const {token} = req.cookies;
    if(!token) return res.status(401),json({message: "Inautorizado"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: "Inautorizado" });

        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({ message: "Inautorizado" });

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    });
};