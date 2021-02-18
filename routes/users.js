const express = require('express');
const router = express.Router();

// Sign Up
router.get('/signup', (req, res) => {
    res.send('sign');
})

// Login
router.get('/login', (req, res) => {
    res.send('log');
})

module.exports = router;