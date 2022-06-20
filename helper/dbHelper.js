const {
    createPool
} = require('mysql');

module.exports.getAllEmployees= function getAllEmployees(){
    return   ;
}

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"@Mysql12345",
    database: "company",
    connectionLimit:20


})

module.exports.queryFromDB = function(query){
    let sqlQuery = query;
    return new Promise((resolve,reject)=>{

        pool.query(sqlQuery, (err,result, fields) => {
            if(err){
                reject(err);
            }
            console.log("inside querryfromDb",result);
            resolve(result);
        })
    })
}




