// // var FirstName ="mohamed";
// // var Lastname ="youssry";
// // var date ="1-1-2000";
// // var age="19";
// // var  profileurl="https://facebook.com/youssry99";
// //
// // var loginwelcomemessage="welcome, "+ FirstName +".happy  "+ age +"rd birthday!";
// // alert(loginwelcomemessage)
//
// var myAcountBalance=300;
//
// var tshir=350;
// if ( myAcountBalance >= tshir )  {
//   myAcountBalance = myAcountBalance - tshir;
//   console.log("you can buy it ")
//   console.log("and your account balnce will be :"+myAcountBalance);
// } else {
//   console.log("you can't bay this");
//   console.log("your balnce is:"+myAcountBalance);
// }

// var student1="mohamed";
// var student2="yasser";
// var student3="cila";
var students = ["mohamed","yasser","cila"];
var naughtylist= [];
// var badkid =students[0];

naughtylist.push(students[0]);

var index = naughtylist.indexOf("mohamed")

if(index > -1){
    naughtylist=naughtylist.splice(index,1)

}
console.log(index)
console.log(students);
console.log(naughtylist);
