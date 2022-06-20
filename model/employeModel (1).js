const dbHelper = require('../helper/dbHelper.js')

module.exports.getAllEmployees= function getAllEmployee() {
    let query="select * from Employee_details";
    return new Promise((resolve,reject)=>{
        dbHelper.queryFromDB(query).then((result)=>{
            resolve(result);
        })

        })
   
}