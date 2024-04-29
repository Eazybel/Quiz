const prev=document.getElementById("prev")
const next=document.getElementById("next")
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const a1=document.getElementById("a1")
const b2=document.getElementById("b2")
const b3=document.getElementById("b3")
const b4=document.getElementById("b4")
const b5=document.getElementById("b5")
const a6=document.getElementById("a6")
const a7=document.getElementById("a7")
const a8=document.getElementById("a8")
const b9=document.getElementById("b9")
const c10=document.getElementById("c10")
const train=document.getElementById("train")

let answer=0
next.onclick=function(){
    if (a1.checked) {
        answer=answer+1
    }
      if(b2.checked){
        answer=answer+1
    }if (b3.checked) {
        answer=answer+1
    }  if(b4.checked){
        answer=answer+1
    }if (b5.checked) {
        answer=answer+1
    }  if(a6.checked){
        answer=answer+1
    }if (a7.checked) {
        answer=answer+1
    }  if(ac8.checked){
        answer=answer+1
    }if (b9.checked) {
        answer=answer+1
    }  if(c10.checked){
        answer=answer+1
    }
   
    train.textContent=(answer)
   }