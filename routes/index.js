var express = require('express');
var router = express.Router();
var dbHelper = require("../helper/dbHelper.js")
var employemodel = require('../model/employeModel.js')





/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('basic', { title: 'Express' });
});




// router.get('/withoutflex', function(req, res, next) {

//   //var imageArray=[{name:"proj1",desc:"desc1"},{name:"proj2",desc:"desc2"},{name:"proj3",desc:"desc3"},{name:"proj4",desc:"desc4"}] ;
//   //var sortedArray=imageArray;

//   // res.render('withoutflex', { title: 'Express', imageArray:sortedArray });

//   let employees = employemodel.getAllEmployees().then((allemployees)=>{
//     console.log("employee details from databese",allemployees)
//     res.render('withoutflex', { title: 'Dhanya' , imageArray : allemployees });
//   });

// });
// 0.




router.get('/withoutflex', function (req, res, next) {
  let eachemployees = [];
  employemodel.getAllEmployees().then((allemployees) => {
    eachemployees = allemployees;
    console.log("employee details with branch name from databese", eachemployees)
    return employemodel.getAllBranch();
  }).then((allbranch) => {
    console.log("branch name details from databese", allbranch)
    res.render('withoutflex', { title: 'Dhanya', imageArray: eachemployees, branchArray: allbranch });
  })

});








// router.get('/dbfilter', function(req, res, next) {

//   let employees = employemodel.getAllEmployees().then((allemployees)=>{
//     console.log("employee details from databese",allemployees)
//     res.render('index', { title: 'Dhanya' , imageArray : allemployees });
//   });

// });




router.get('/wi', function (req, res, next) {
  res.render('altoura', { title: 'Express', projectArray: [{ name: "proj1", desc: "desc1" }, { name: "proj2", desc: "desc2" }, { name: "proj3", desc: "desc3" }, { name: "proj4", desc: "desc4" }] });
});






router.get('/dhanya', function (req, res, next) {
  res.render('dhanya', { title: 'dhanya', });
});

router.get('/emp/:id', function (req, res, next) {
  let param1=req.params.id;
  let employees = employemodel.getEmpDetailsById(param1).then((allemployees) => {
    console.log("employee details from databese", allemployees[0])
    res.render('eachempldetails', { title: 'Dhanya', employeesArray: allemployees[0] });
   
  });

});

router.get('/altoura', function (req, res, next) {
  let param1 = req.query.keyName;

  if (param1 == "dh") {
    res.render('dhanya', { title: req.query.title });

  }
  else if (param1 == "alt") {
    res.render('altoura', { title: 'dhanya', projectArray: dbHelper.getProject() });
  }

  else {
    res.render('index', { title: req.query.title });

  }

});
module.exports = router;
