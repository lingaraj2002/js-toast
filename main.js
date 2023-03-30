// Toast
let btn = document.querySelector("#btn");
let toast = document.querySelector(".toast");

function why(){
    toast.classList.add("show-msg");
    setTimeout(()=>{
        toast.classList.remove("show-msg");
    },3000);
}