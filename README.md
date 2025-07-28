# Razorpay Payment App

A simple payment integration using Razorpay with React frontend and Node.js backend.

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
# Add your Razorpay keys to .env file
npm run dev

## Frontend Setup
bashcd frontend
npm install
npm start

## Environment Variables
Create backend/.env file with:
RAZORPAY_KEY_ID=your_test_key_here
RAZORPAY_KEY_SECRET=your_test_secret_here
PORT=5000