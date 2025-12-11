// index.js (THE ULTIMATE MINIMAL TEST)

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Main Test Route
app.get('/test', (req, res) => {
    // यह endpoint हमें JSON आउटपुट देगा अगर सर्वर चल रहा है
    res.json({
        success: true,
        message: "Server is ALIVE and running the simplest route!"
    });
});

// Health Check Route
app.get('/health', (req, res) => {
    res.json({
        success: true,
        api: 'running',
        message: 'Health endpoint working!'
    });
});

// IMPORTANT: Final Export for Vercel
module.exports = app;
