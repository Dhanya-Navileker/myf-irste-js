// <--------ACCESSING CLICK EVENT USING ID ATTRIBUTE-------->



// window.onload=function(){

//     document.getElementById("demo").onclick = function() {myFunction()};

//     function myFunction() {
//     document.getElementById("dem").innerHTML = "YOU CLICKED ME!";
// }

// }












window.onload = function () {






    // [1]              TO FILTER THE PROJECT ITEMS BASED ON THE CLICK OF A BUTTON
    let filterparam="";
    $(".branchname").click (function () {
        filterparam= $(this).attr("data-branchid");
       console.log("hi",filterparam);
       $('.Project-item').css({'display':'inline-block'})

       filterElementsByBranch(filterparam)
  })

   function filterElementsByBranch(branchname ){
       console.log(filterparam);
       $('.Project-item').each(function () {
           //  $("['data-branchname'='<%= eachimage.branch_name%>']==branc")
           if ($(this).data("branchname") != branchname) {
               console.log("Its inside the function", $(this).data("branchname"));
               $(this).hide();
           } else if ($(this).data("branchname") == branchname) {
               console.log("Its inside the function", $(this).data("branchname"));
               $(this).show();
           }

      });
  }






    // console.log(array);



    //[2]         Inorder to rearrange the images based on asc and desc order of the title    

    function regenerateProjectList(projectArray) {
        let projectContainer = $('.proj-container');
        projectContainer.empty();
        console.log("filter value",filterparam);

        projectArray.forEach(function (eachProject) {
            console.log("each project list abc",eachProject.branch_name);
            console.log("heyy" ,((filterparam !="" && filterparam != eachProject.branch_name))?"hide":"")
          

            


            projectContainer.append(
                `<div class="Project-item  ${((filterparam !="" && filterparam != eachProject.branch_name))?"hide":""}" data-value="{&quot;emp_id&quot;:100,&quot;first_name&quot;:&quot;David&quot;,&quot;last_name&quot;:&quot;Wallace&quot;,&quot;birth_day&quot;:&quot;1967-11-16T18:30:00.000Z&quot;,&quot;sex&quot;:&quot;M&quot;,&quot;salary&quot;:250000,&quot;super_id&quot;:null,&quot;branch_id&quot;:1}" data-firstname="${eachProject.first_name}">+

            <!-- <p class="some-class"></p> -->
    
    
            <div class="proj-img-container" id="demo">
                <p class="some-class"></p>
                <img src="/images/OIP.jfif" class="proj-img">
            </div>
            <div class="proj-footer">
                <div class="title">${eachProject.first_name}
                </div>
                <div class="delete">
                    <img src="/images/delete_p.png" class="proj-img">
                </div>
                <div class="status">
                    <img src="/images/delete.png" class="proj-img">
                </div>
            </div>
        </div>   
        `



            )


        })

        //this is Appended AFTER FOREACH BECAUsE BUTTONS WILL BE ADDED TO EACH OF THE PROJECTIMAGE..SINCE WE NEED BUTTONS AT THE END OF ALL THE IMAGE WE ARE ESCAPING FOR LOOP And appending it here to the project container
        // projectContainer.append(
        //     `<div>
        //     <button  id="asc" > Ascending button</button>
        //     <button id="desc">Descending button</button>
        //     </div>`)

    }






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

        regenerateProjectList(dataArray);//its calling the regenerateProjectList function..and the (data array) inside descending function is passed as an argument to the parameter (projectarray)

        // TO PRINT THE DATA WITHIN THE ELEMENT WITHOUT VANISHING ALL THE OTHER ELEMENT IN THE DOCUMENT
        // var targetDiv = document.getElementById('ID');
        // targetDiv.textContent = " ";
        // targetDiv.innerHTML += "Sorted Employee Names : ";
        // for (var item in dataArray) {
        //     targetDiv.innerHTML += "<br>" + dataArray[item].first_name;
        // }

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

        regenerateProjectList(dataArray);//its calling the regenerateProjectList function..and the (data array) inside descending function is passed as an argument to the parameter (projectarray)

        // TO PRINT THE DATA WITHIN THE ELEMENT WITHOUT VANISHING ALL THE OTHER ELEMENT IN THE DOCUMENT
        // var targetDiv = document.getElementById('ID');
        // targetDiv.textContent = "";

        // targetDiv.innerHTML += "Sorted Employee Names in descending order : ";
        // for (var item in dataArray) {
        //     targetDiv.innerHTML += "<br>" + dataArray[item].first_name;
        // }

        // TO PRINT THE DATA TO THE DOCUMENT WHERE ALL THE OTHER ELEMENT GETS VANISHED!!!!


        // document.write("Sorted Employee Names : ");    
        // for (var item in dataArray) {    
        //     document.write("<br>" + dataArray[item].first_name);    
        // }        

    };















    //[3]                   <--------ACCESSING CLICK EVENT USING QUERY SELECTOR-------->
    //    TO PRINT EACH ROW FROM THE DATABASE ON CLICK OF THE DIV WITH THE CLASSNAME ".Project-item "


    // document.querySelectorAll('.Project-item ').forEach(button => {
    //     button.onclick = function () {
    //         console.log("hhh", this.getAttribute('data-value'))
    //         //rest of code
    //         document.querySelectorAll("some-class").innerHTML = "YOU CLICKED ME!";
    //     };

    // });


    


//[4] //   

    // window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    // if (window.pageYOffset >= sticky) {
    //    navbar.classList.add("sticky")
    // } else {
    //    navbar.classList.remove("sticky");
    // }
    // }



    let dataval="";
    let onlyid="";
    document.querySelectorAll('.Project-item ').forEach(button => {
            button.onclick = function () {
                console.log("hhh", this.getAttribute('data-value'))
                dataval= $(this).attr('data-value');
                console.log("getting data val", dataval)
                onlyid=JSON.parse(dataval);
                location.href="http://localhost:3000/emp/"+onlyid.emp_id;
                console.log("only empId",onlyid.emp_id)
                
               
            };
    
        });



}








       
   