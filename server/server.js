// At the top of the file:
const jobsRouter = require('./routes/jobs');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/jobs', jobsRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(5002, () => {
    console.log("Server is running on Port: 5002");
});
