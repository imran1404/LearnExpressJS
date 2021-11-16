const router = require('express').Router();

const apiKeyMiddleware = require('../middlewares/apiKey')


router.get('/', (req, res) => {
    res.render('index', {
        title: "my home page"
    });
});



router.get('/api/products', apiKeyMiddleware, (req, res) => {
    res.json([

        {
            id: "123",
            name: "crome"
        },{
            id: "234",
            name: "Firfox"
        }
    ])
});




module.exports = router;