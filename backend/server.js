// server.js

const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware to handle CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Define API routes
app.get('/', (req, res) => {
    res.send('Welcome to Time Capsule App API!');
});

// A sample route to handle saving a time capsule
app.post('/api/save-capsule', (req, res) => {
    const { name, message, unlockDate } = req.body;

    // Normally here you would save the data to a database
    // For now, we’ll just return it back in the response
    if (name && message && unlockDate) {
        res.status(201).json({
            status: 'success',
            message: `Time capsule for ${name} saved successfully!`,
            data: { name, message, unlockDate }
        });
    } else {
        res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello from the backend!' });
  });