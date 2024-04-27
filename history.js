const prev=document.getElementById("prev");
const next=document.getElementById("next");
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const b1=document.getElementById("b1")
const b2=document.getElementById("b2")
const c3=document.getElementById("c3")
const c4=document.getElementById("c4")
const d5=document.getElementById("d5")
const b6=document.getElementById("b6")
const b7=document.getElementById("b7")
const b8=document.getElementById("b8")
const a9=document.getElementById("a9")
const a10=document.getElementById("a10")
const train=document.getElementById("train")

let answer=0
next.onclick=function(){
    if (b1.checked) {
        answer=answer+1
    }
      if(b2.checked){
        answer=answer+1
    }if (c3.checked) {
        answer=answer+1
    }  if(c4.checked){
        answer=answer+1
    }if (d5.checked) {
        answer=answer+1
    }  if(b6.checked){
        answer=answer+1
    }if (b7.checked) {
        answer=answer+1
    }  if(b8.checked){
        answer=answer+1
    }if (a9.checked) {
        answer=answer+1
    }  if(a10.checked){
        answer=answer+1
    }
   
    train.textContent=(answer)
   }