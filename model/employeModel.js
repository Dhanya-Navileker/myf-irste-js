const dbHelper= require('../helper/dbHelper.js')

// module.exports.getAllEmployees=function getAllEmployees(){
//     let query="select*from employee";
//     return new Promise((resolve,reject)=>{
//          dbHelper.queryFromDB(query).then((result)=>{;
//             resolve(result);
//         })

//     })









//Combining two tables and printing the data from the database


module.exports.getAllEmployees=function getAllEmployees(){
    let query=`SELECT employee.emp_id, employee.first_name,employee.last_name,branch.branch_name,branch.mgr_id
    FROM company.employee
    INNER JOIN company.branch ON employee.branch_id=branch.branch_id;`;
    return new Promise((resolve,reject)=>{
         dbHelper.queryFromDB(query).then((result)=>{
            console.log("result");
             console.log(result);
            resolve(result);
        })

    })

}



//only printing the branch name


module.exports.getAllBranch=function getAllBranch(){
    let query=`SELECT branch.branch_name
    FROM company.branch`;
    return new Promise((resolve,reject)=>{
         dbHelper.queryFromDB(query).then((result)=>{;
            resolve(result);
        })

    })

}



//database individual value of the employee onclicking the project item //
module.exports.getEmpDetailsById=function getEmpDetailsById(param1){
    let query=`SELECT * from employee where emp_id=${param1}`;
    console.log("hello db",param1);

    return new Promise((resolve,reject)=>{
         dbHelper.queryFromDB(query).then((result)=>{;
            resolve(result);
        })

    })

}