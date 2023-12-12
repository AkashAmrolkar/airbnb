const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.use(express.json());

const mongoUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
 
mongoose.connect(mongoUrl, options).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is connect to the port ${port}`)
});