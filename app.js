
let timer = document.querySelector(".timer");
let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")
let increase = document.querySelector("#increase")

let counter = 0;

decrease.addEventListener("click" , ()=>{
     counter--;
    timer.innerHTML =counter;
})
reset.addEventListener("click", ()=>{
    counter = 0;
   timer.innerHTML =counter;
})
    increase.addEventListener("click",()=>{
        counter++;
        timer.innerHTML =counter;
    })

