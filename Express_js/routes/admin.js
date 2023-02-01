const express = require('express');

const router = express.Router();

const path = require('path')

const rootDir = require('../utils/path')

router.get('/app-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','app-product.html'))
})

router.post('/app-product',(req,res,next)=>{
    res.send('<h1>Product received</h1>')
    console.log('Form-data',req.body);
})

module.exports = router;