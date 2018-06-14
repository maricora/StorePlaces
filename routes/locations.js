var express = require('express');
var router = express.Router();

/* GET locations listing. */
router.get('/', function(req, res, next) {

    /* Todo - data from database */
    res.json([{
        id: 1,
        name: "Lisbon",
        coordinates: [38.7223, 9.1393]
    }, {
        id: 2,
        name: "Porto",
        coordinates: [41.1579, 8.6291]
    }, {
        id: 3,
        name: "Valencia",
        coordinates: [39.4699, 0.3763]
    }, {
        id: 4,
        name: "Wroclaw",
        coordinates: [51.1079, 17.0385]
    }]);
});

module.exports = router;