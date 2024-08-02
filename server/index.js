import express from "express";
import cors from "cors"
import users from "./users.js";

const app = express()

app.use(cors({
    origin: 'http://localhost:3000', // Specify allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Enable if you need to allow cookies
}));

app.get("/", (req, res) => {
    res.send("Jarvis, is this thing on?");
})

app.get("/api/user", (req, res) => {
    console.log('it is working');
    console.log(users)
    res.json(users);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})
