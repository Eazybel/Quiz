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
    }  if(c6.checked){
        answer=answer+1
    }if (b7.checked) {
        answer=answer+1
    }  if(b8.checked){
        answer=answer+1
    }if (c9.checked) {
        answer=answer+1
    }  if(d10.checked){
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