const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const Complaint = require('./db/models/complaints.js');

const app = express();

dotenv.config({ path: './db/.env' });
connectDB();

const port = 3030;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173' 
}));

app.post('/submit', async (req, res) => {
    try{
        const {name, room_no, issue_type, desc} = req.body;
        const complaint = await Complaint.create({name, room_no, issue_type, desc});
        res.status(201).json(complaint);
    }catch (error){
        res.status(400).json({message: error.message});
    }
});

app.listen(port, ()=>{
    console.log(`App running on port https://localhost:${port}/submit`);
})