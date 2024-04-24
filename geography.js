const prev=document.getElementById("prev");
const next=document.getElementById("next");
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const a1=document.getElementById("a1")
const c2=document.getElementById("c2")
const b3=document.getElementById("b3")
const a4=document.getElementById("a4")
const c5=document.getElementById("c5")
const c6=document.getElementById("c6")
const b7=document.getElementById("b7")
const b8=document.getElementById("b8")
const c9=document.getElementById("c9")
const d10=document.getElementById("d10")
const train=document.getElementById("train")
var answer=0

    if (a1.checked) {
        answer=answer+1
    } else if(c2.checked){
        answer=answer+1
    }if (b3.checked) {
        answer=answer+1
    } else if(a4.checked){
        answer=answer+1
    }if (c5.checked) {
        answer=answer+1
    } else if(c6.checked){
        answer=answer+1
    }if (b7.checked) {
        answer=answer+1
    } else if(b8.checked){
        answer=answer+1
    }if (c9.checked) {
        answer=answer+1
    } else if(d10.checked){
        answer=answer+1
    }

next.onclick=function(){
    train.textContent=answer
}