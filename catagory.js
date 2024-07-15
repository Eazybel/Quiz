const btnd = document.getElementById("btnd");
const body = document.querySelector("body")
const geography=document.getElementById("geography")
const history=document.getElementById("history")
const science=document.getElementById("science")
const literature=document.getElementById("literature")
const art=document.getElementById("art")
const sports=document.getElementById("sports")
const brands=document.getElementById("brands")
const football=document.getElementById("football")
const famous=document.getElementById("famous")
btnd.onclick=function(){
    if (geography.checked) {
        document.location=("geography.html")
    }
   if (history.checked) {
        document.location=("history.html")
    }
    if (science.checked) {
        document.location=("science.html")
    }
    if (literature.checked) {
        document.location=("literature.html")
    }
    if (art.checked) {
        document.location=("art.html")
    }
    if (sports.checked) {
        document.location=("sports.html")
    }
    if (brands.checked) {
        document.location=("brands.html")
    }
    if (football.checked) {
        document.location=("football.html")
    }
    if (famous.checked) {
        document.location=("famous.html")
    }
}