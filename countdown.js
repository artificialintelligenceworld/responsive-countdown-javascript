//setting date we are counting down
var countDownDate = new Date("Dec 25, 2019, 00:00:00").getTime()
// update the count down every 1 secound
var x =setInterval(function(){
  //get today Date
  var now = new Date().getTime();
  //find out the distance between now and the count
 var distance = countDownDate - now;
 //time caluculation for days hours minutes and secounds
   var days =Math.floor(distance/(1000* 60 *60 *24));
   var hours =Math.floor((distance%(1000 *60 *60 *24))/(1000 *60 *60));
   var minutes = Math.floor((distance % (1000 * 60 *60))/(1000 *60));
   var seconds = Math.floor((distance % (1000 * 60))/1000);
   // Output the Result in an Element
   document.getElementById("demo").innerHTML = days +"D"+ hours+ "H" + minutes + "M" +seconds+ "S";

   //if teh count down date is reached set some text
   if(distance<0){
     clearInterval(x);
     document.getElementById("demo").innerHTml="Expired";
   }
},1000);
