const prev=document.getElementById("prev");
const next=document.getElementById("next");
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const c1=document.getElementById("c1")
const a2=document.getElementById("a2")
const a3=document.getElementById("a3")
const a4=document.getElementById("a4")
const a5=document.getElementById("a5")
const a6=document.getElementById("a6")
const c7=document.getElementById("c7")
const c8=document.getElementById("c8")
const c9=document.getElementById("c9")
const a10=document.getElementById("a10")
const train=document.getElementById("train")

let answer=0
next.onclick=function(){
    if (c1.checked) {
        answer=answer+1
    }
      if(a2.checked){
        answer=answer+1
    }if (a3.checked) {
        answer=answer+1
    }  if(a4.checked){
        answer=answer+1
    }if (a5.checked) {
        answer=answer+1
    }  if(a6.checked){
        answer=answer+1
    }if (c7.checked) {
        answer=answer+1
    }  if(c8.checked){
        answer=answer+1
    }if (c9.checked) {
        answer=answer+1
    }  if(a10.checked){
        answer=answer+1
    }
   
    train.textContent=(answer)
   }