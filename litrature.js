const prev=document.getElementById("prev");
const next=document.getElementById("next");
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const a1=document.getElementById("a1")
const b2=document.getElementById("b2")
const b3=document.getElementById("b3")
const b4=document.getElementById("b4")
const c5=document.getElementById("c5")
const a6=document.getElementById("a6")
const a7=document.getElementById("a7")
const a8=document.getElementById("a8")
const b9=document.getElementById("b9")
const c10=document.getElementById("c10")
const train=document.getElementById("train")
const course=document.getElementById("course")
const submit=document.getElementById("submit")
const popup=document.getElementById("popup")
const Q10=document.getElementById("Q10")
const container=document.getElementById("container")
const result=document.getElementById("result")
const texts=document.getElementById("texts")
const ok=document.getElementById("ok")
const comment=document.getElementById("comment")
let answer=0
submit.onclick=function(){
    if (a1.checked) {
        answer=answer+1
    }
      if(c2.checked){
        answer=answer+1
    }if (b3.checked) {
        answer=answer+1
    }  if(a4.checked){
        answer=answer+1
    }if (c5.checked) {
        answer=answer+1
    }  if(a6.checked){
        answer=answer+1
    }if (a7.checked) {
        answer=answer+1
    }  if(a8.checked){
        answer=answer+1
    }if (c9.checked) {
        answer=answer+1
    }  if(c10.checked){
        answer=answer+1
    }
    if (answer<5) {
        comment.innerText="You better Study Geography you got"
    }
    if (answer>5 && answer<8) {
        comment.innerText="You're doing great you got"
    }
    if (answer>5 && answer>8) {
        comment.innerText="Woooow You Nailed it you got"
    }
    texts.style.display="block"
    result.innerText=answer
    container.style.display="none"
    popup.style.visibility="visible"
    popup.classList.add("popup");
   }
   ok.onclick=function(){
    document.location="catagory.html"
   }