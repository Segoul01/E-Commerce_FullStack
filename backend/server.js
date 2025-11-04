import express from 'express';
import { connectDB } from './config/db.js';
const app = express();


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({message: "This works!!"}));
    res.end();
})


app.listen(8000, () => {
    console.log(`Server started at port: 8000`);
    connectDB();
});