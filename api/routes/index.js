var express = require('express');
var router = express.Router();
var sampleController =  require('./../controllers/sample.controller.js');

// ============= import your comtrollers here ==================//

// var hotelctrl =  require('./../controllers/hotels.controller.js');
// var reviewctrl =  require('./../controllers/reviews.controller.js');

router
.route('/')
.get(sampleController.sampleController)


module.exports = router;