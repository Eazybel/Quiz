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