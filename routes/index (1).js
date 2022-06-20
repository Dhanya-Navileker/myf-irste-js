var express = require('express');
var router = express.Router();
var employemodel = require('../model/employeModel.js')
/* GET home page. */



router.get('/sub', function(req, res, next) {
  res.render('newDesign', { title: 'Pavan P', imageArray:
  [{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},
  {name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
  ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
  ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
  ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
  ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
  ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
  ,{name:"proj4",desc:"desc4"},{name:"proj4",desc:"desc4"}
]});
});

router.get('/emp', function(req, res, next) {
  let employees = employemodel.getAllEmployees().then((allemployees)=>{
    console.log("employee details from databese",allemployees)
    res.render('index', { title: 'Pavan P' , employeesArray: allemployees });
  });
  
});

router.get('/sub1', function(req, res, next) {
  var param1 = req.query.keyname;
  
  if(param1=="dh"){
    console.log('keyname',param1);
    res.render('Web', { title: 'Pavan P' });
  }
  else if(param1=="lh"){
  console.log('keyname',param1);
  res.render('index2', { title: 'Pavan P' });
  }
  else{
    console.log('keyname',param1, "ERROR Keyname not found");

  }


});

router.get('/sub2', function(req, res, next) {
  res.render('Button', { title: 'Pavan P' });
});


router.get('/sub3', function(req, res, next) {
  res.render('WebWithFor', { title: 'Pavan P', imageArray:
  [{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},
  {name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}]});
});

router.get('/sub4', function(req, res, next) {
  res.render('Button_without_forEach', { title: 'Pavan P', imageArray:[{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},{name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}]});
});


router.get('/getjson', function(req, res, next) {
  res.status(400).json({ "code": 200, "data":{ title: 'Pavan P', imageArray:[{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},{name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}]} });
  
  
  
});


module.exports = router;
