const prev=document.getElementById("prev");
const next=document.getElementById("next");
const body=document.querySelector("body")
const Q=document.getElementById("Q")
const a=document.getElementById("a")
const train=document.getElementById("train")
var answer=0
next.onclick=function(){
    switch (a.checked) {
        case true:
            train.textContent="correct"
            break;
        case false:
            train.textContent="incorrect"
        default:
            break;
    }
}
