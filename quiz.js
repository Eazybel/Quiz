const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const btn = document.getElementById("btn");
let para = document.getElementById("para");
const cont=document.getElementById("continue");

link1.onclick=function(){
   para.innerHTML=("<h2>This service is not available</h2>\ncontinue without signing-up");
   setTimeout(fun3,2000);
 
} 
link2.onclick=function (){
   para.innerHTML=("<h2>This service is not available</h2>\ncontinue without signing-up");
   setTimeout(fun3,2000);
}

const fun3=function(){
   para.textContent=""
}










