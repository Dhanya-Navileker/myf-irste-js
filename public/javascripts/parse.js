function parse(){

    const input = 'Shirt&&Medium&&BlueORWhite&&NikeORAdidas&&CottonORSilk';
    const splitUsingAmpercend=input.split("&&");

    console.log(splitUsingAmpercend);

    console.log("Hello, world!");

var input="shirt&&Medium&&BlueORWhite&&NikeORAdidas&&CottonORSilk" ;
var splitTwice="";



var txt="Select from TAGS Where TAGName="

splitTwice=input.split("&&").join(" INTERSECT ").split("OR").join(" UNION ") 

console.log("after union and intersect",splitTwice);

var toarray=splitTwice.split(" ").slice(0, 2).join(" ");
var toarray1=splitTwice.split(" ").slice(2, 4).join(" ");
var toarray2=splitTwice.split(" ").slice(4, 6).join(" "); 
var toarray3=splitTwice.split(" ").slice(6, 8).join(" ");
var toarray4=splitTwice.split(" ").slice(8, 10).join(" ");
var toarray5=splitTwice.split(" ").slice(10, 12).join(" ");

txt += toarray+"\n".concat(txt+=toarray1+ "\n".concat(txt
       +toarray2+"\n".concat(txt+toarray3 + "\n".concat(txt+toarray4))))


}
parse();