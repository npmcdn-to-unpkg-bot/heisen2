<<<<<<< HEAD
/**
 * Created by lenovo on 30-05-2016.
 */

var express = require('express');
var router = express.Router();
var services = require('../models/travelPlan.model');

router.get('/travelPlan/:id', function (req, res, next) {
  var travelPlaId=req.params.id;
    services.getTravelPlan(travelPlanId).then(function (data) {
        res.send(data);
    });

});
router.post('/travelPlan', function (req, res, next) {
    services.postTravelPlan(travelPlandata).then(function () {

    });

});
router.put('/travelPlan/:id', function (req, res, next) {
             var travelPlanId=req.params.id;
    services.putTravelPlan(id,travelPlanNew).then(function () {
    });

});
router.delete('/travelPlan/:id', function (req, res, next) {
     var travelPlanId=req.params.id;
    services.deleteTravelPlan(travelPlanId).then(function () {
    });

});
module.exports = router;
=======
/**
 * Created by lenovo on 30-05-2016.
 */

var express = require('express');
var router = express.Router();
var travelPlan = require('../models/travelPlan.model');

router.get('/travelPlan/:id', function (req, res, next) {
  var travelPlanId=req.params.id;
    services.getTravelPlan(travelPlanId).then(function (data) {
        res.send(data);
    });

});
router.post('/travelPlan', function (req, res, next) {
    travelPlandata=req.body;
    services.postTravelPlan(travelPlandata).then(function () {

    });
});
router.put('/travelPlan/:id', function (req, res, next) {
             var travelPlanId=req.params.id;
    services.putTravelPlan(id,travelPlanNew).then(function () {
    });

});
router.delete('/travelPlan/:id', function (req, res, next) {
     var travelPlanId=req.params.id;
    services.deleteTravelPlan(travelPlanId).then(function () {
      
    });

});


module.exports = router;
>>>>>>> 37bc1742cb7dec62e4cb2454fad758698e0c1e1c
