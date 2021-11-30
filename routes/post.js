/*const createPost = (req,res,next) => {

	res.send('Hello from International Bank of Money');
};

module.exports = {

	createPost
};*/

const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {

	res.send('Hello from International Bank of Money');
});

router.get('/home', (req, res, next) =>{

	res.render('home',null);
});

module.exports = router;


