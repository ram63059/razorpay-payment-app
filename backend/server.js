const express = require('express');
const Razorpay = require('razorpay');
const crypto =require('crypto');
const cors=requrie('cors');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

