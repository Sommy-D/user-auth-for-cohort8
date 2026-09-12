const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute.js');

const compass_string = "mongodb://localhost:27017/cohort8_db"; //local connection string
const atlas_string = "mongodb+srv://ogbatuanthony_db_user:Anthony1998@cluster0.ov1kqgf.mongodb.net/?appName=Cluster0";

mongoose.connect(compass_string)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express();
const PORT = 5555;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('server is active!');
});

app.use('/users', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});