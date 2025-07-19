const quiz=localStorage.getItem("Quiz")
const questions=JSON.parse(quiz)
const h2=document.querySelectorAll("h2")
const a=document.querySelectorAll(".a")
const b=document.querySelectorAll(".b")
const c=document.querySelectorAll(".c")
const d=document.querySelectorAll(".d")
let counter=0
 for (let i = 0; i < h2.length; i++) {
  h2[i].innerText=`${i+1}. ${questions[i].question}`
  a[i].innerText=questions[i].answers.answer_a
  b[i].innerText=questions[i].answers.answer_b
  c[i].innerText=questions[i].answers.answer_c
  d[i].innerText=questions[i].answers.answer_d
  
}

