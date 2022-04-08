const { Router } = require('express');
const { generarPrimo } = require('../primo/prime');


const router = Router();

router.get('/', (req, res) => {
    const primo = generarPrimo(100);
    console.log(primo);

    res.json(primo);
});

module.exports = router;