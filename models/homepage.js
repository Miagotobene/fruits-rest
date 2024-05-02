const express = require('express');
const homePage = express.Router();


homePage.get('', async(req,res) =>{
    res.render('home') // render ejs file
})
module.exports = homePage;