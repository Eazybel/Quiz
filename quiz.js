const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const btn = document.getElementById("btn");
let para = document.getElementById("para");

const fun=function(){
   para.textContent=("This service is not available");
 
} 
const fun2=function (){
   para.textContent=("This service is not available");
}
link1.onclick=setTimeout(fun,3000);









