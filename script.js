const htmlE=document.getElementById("htmlE")
const easy=document.getElementsByClassName("text-green-700")

htmlE.addEventListener("click",()=>{
   fetch(`https://quizapi.io/api/v1/questions?apiKey=uY7Mpxfre42OGT8hBNOwDirHpCi1wMMLkjQ75dW4&limit=10&category=Html&difficulty=easy`)
.then(res=>res.json())
.then(data=>{
   console.log(data)
})
for (let div of easy) {
   console.log(div.parentNode.firstChild)
}

console.log("sucess")

})
 