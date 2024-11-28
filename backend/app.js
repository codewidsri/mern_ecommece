const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectDatabase = require('./config/ConnectDatabase');

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product');
const orders = require('./routes/order');
const users= require('./routes/userRoutes');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(cors({ origin: "https://cuddly-fortnight-r4g64vgrrr6vhxqgx-3000.app.github.dev", credentials: true }));

app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.use('/api/v1/users', users);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});