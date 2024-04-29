const prev=document.getElementById("prev");
const next=document.getElementById("next");
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const b1=document.getElementById("b1")
const a2=document.getElementById("a2")
const c3=document.getElementById("c3")
const b4=document.getElementById("b4")
const b5=document.getElementById("b5")
const c6=document.getElementById("c6")
const c7=document.getElementById("c7")
const b8=document.getElementById("b8")
const a9=document.getElementById("a9")
const a10=document.getElementById("a10")
const train=document.getElementById("train")

let answer=0
next.onclick=function(){
    if (b1.checked) {
        answer=answer+1
    }
      if(a2.checked){
        answer=answer+1
    }if (c3.checked) {
        answer=answer+1
    }  if(b4.checked)a
        answer=answer+1
    }if (b5.checked) {
        answer=answer+1
    }  if(c6.checked){
        answer=answer+1
    }if (c7.checked) {
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