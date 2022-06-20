// <--------ACCESSING CLICK EVENT USING ID ATTRIBUTE-------->



// window.onload=function(){

//     document.getElementById("demo").onclick = function() {myFunction()};

//     function myFunction() {
//     document.getElementById("dem").innerHTML = "YOU CLICKED ME!";
// }

// }












window.onload = function () {
    // console.log(array);






    console.log("inside onload");








    // TO ORDER THE JSON DATA IN ASCENDING ORDER ONCLICK OF BUTTON





    document.getElementById('asc').onclick = function () {
        console.log("Inside ASC button", dataArray)
        //rest of code
        function GetSortOrder(prop) {
            return function (a, b) {
                if (a[prop] > b[prop]) {
                    return 1;
                } else if (a[prop] < b[prop]) {
                    return -1;
                }
                return 0;
            }
        }

        dataArray.sort(GetSortOrder("first_name")); //Pass the attribute to be sorted on

        // TO PRINT THE DATA WITHIN THE ELEMENT WITHOUT VANISHING ALL THE OTHER ELEMENT IN THE DOCUMENT
        var targetDiv = document.getElementById('ID');
        targetDiv.innerHTML += "Sorted Employee Names : ";
        for (var item in dataArray) {
            targetDiv.innerHTML += "<br>" + dataArray[item].first_name;
        }

        // TO PRINT THE DATA TO THE DOCUMENT WHERE ALL THE OTHER ELEMENT GETS VANISHED!!!!


        // document.write("Sorted Employee Names : ");    
        // for (var item in dataArray) {    
        //     document.write("<br>" + dataArray[item].first_name);    
        // }        

    };












 // TO ORDER THE JSON DATA IN DESCENDING ORDER ONCLICK OF BUTTON

    document.getElementById('desc').onclick = function () {
        console.log("Inside ASC button", dataArray)
        //rest of code
        function GetSortOrder(prop) {
            return function (a, b) {
                if (a[prop] < b[prop]) {
                    return 1;
                } else if (a[prop] > b[prop]) {
                    return -1;
                }
                return 0;
            }
        }

        dataArray.sort(GetSortOrder("first_name")); //Pass the attribute to be sorted on

        // TO PRINT THE DATA WITHIN THE ELEMENT WITHOUT VANISHING ALL THE OTHER ELEMENT IN THE DOCUMENT
        var targetDiv = document.getElementById('ID');
        targetDiv.innerHTML += "Sorted Employee Names in descending order : ";
        for (var item in dataArray) {
            targetDiv.innerHTML += "<br>" + dataArray[item].first_name;
        }

        // TO PRINT THE DATA TO THE DOCUMENT WHERE ALL THE OTHER ELEMENT GETS VANISHED!!!!


        // document.write("Sorted Employee Names : ");    
        // for (var item in dataArray) {    
        //     document.write("<br>" + dataArray[item].first_name);    
        // }        

    };















    // <--------ACCESSING CLICK EVENT USING QUERY SELECTOR-------->
    //    TO PRINT EACH ROW FROM THE DATABASE ON CLICK OF THE DIV WITH THE CLASSNAME ".Project-item "


    document.querySelectorAll('.Project-item ').forEach(button => {
        button.onclick = function () {
            console.log("hhh", this.getAttribute('data-value'))
            //rest of code
            document.querySelectorAll("some-class").innerHTML = "YOU CLICKED ME!";
        };

    });










}







$(document).ready(function(){
    $("p").click(function(){
      alert("The paragraph was clicked.");
    });
  });






  