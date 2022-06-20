console.log("Hello, world!");

var input="shirt&&Medium&&BlueORWhite&&NikeORAdidas&&CottonORSilk" ;
var splitTwice="";



var txt="Select from TAGS Where TAGName="

splitTwice=input.split("&&").join(" INTERSECT ").split("OR").join(" UNION ") 

console.log("after union and intersect\n",splitTwice);


var toarray=splitTwice.split(" ").slice(0, 2).join(" ");
var toarray1=splitTwice.split(" ").slice(2, 4).join(" ");
var toarray2=splitTwice.split(" ").slice(4, 6).join(" "); 
var toarray3=splitTwice.split(" ").slice(6, 8).join(" ");
var toarray4=splitTwice.split(" ").slice(8, 10).join(" ");
var toarray5=splitTwice.split(" ").slice(10, 12).join(" ");

txt += toarray+"\n".concat(txt+toarray1)+"\n".concat(txt+toarray2)
       


console.log(txt)




// WITHOUT HARDCODING THE DATA -----------> IMPORTANT



var input="shirt&&Medium&&BlueORWhite&&NikeORAdidas&&CottonORSilkORBlack" ;
var splitTwice="";


var txt="";
var txt1="Select from TAGS Where TAGName="

splitTwice=input.split("&&").join(" INTERSECT ").split("OR").join(" UNION ").split(" ") 



var myStringArray = splitTwice;
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i+=2) {
    
    if(myStringArray[i+1]==undefined){
      console.log(txt=txt1+myStringArray[i])
      
    }
    else{
    console.log(txt=txt1+myStringArray[i]+ " "+ myStringArray[i+1]);
    }
    
    
}



console.log("after union and intersect\n",splitTwice);


var toarray=splitTwice.split(" ").slice(0, 2).join(" ");
var toarray1=splitTwice.split(" ").slice(2, 4).join(" ");
var toarray2=splitTwice.split(" ").slice(4, 6).join(" "); 
var toarray3=splitTwice.split(" ").slice(6, 8).join(" ");
var toarray4=splitTwice.split(" ").slice(8, 10).join(" ");
var toarray5=splitTwice.split(" ").slice(10, 12).join(" ");

txt += toarray+"\n".concat(txt+toarray1)+"\n".concat(txt+toarray2)
       


console.log(txt)




