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
const c8=document.getElementById("c8")
const a9=document.getElementById("a9")
const a10=document.getElementById("a10")
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
    if (b1.checked) {
        answer=answer+1
    }
      if(a2.checked){
        answer=answer+1
    }if (c3.checked) {
        answer=answer+1
    }  if(b4.checked){
        answer=answer+1
    }if (b5.checked) {
        answer=answer+1
    }  if(c6.checked){
        answer=answer+1
    }if (c7.checked) {
        answer=answer+1
    }  if(c8.checked){
        answer=answer+1
    }if (a9.checked) {
        answer=answer+1
    }  if(a10.checked){
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