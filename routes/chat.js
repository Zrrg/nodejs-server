const express = require('express')
const router = express.Router();
const path = require('path')
const chatController = require('../controllers/chatController')


router.get('^/$|/chat(.htm(l)?)?', (req, res) => {
    
    res.sendFile(path.join(__dirname, '..', 'views', 'chat.html'));
});

module.exports = router;