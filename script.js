console.log("Hello world");
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".choicefrom");
btn.addEventListener("click",function(){
    console.log("Click")
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden");
        btn.textContent="Close";
    }
    else{
        form.classList.add('hidden');
        btn.textContent="Share A Fact";
    }
});
// now we make simple function who give a year of fact post

function postyear(year){
    const curr = new Date().getFullYear();
    const y = curr-year;
    if(y>=0){
        return y;
    }else{
        console.log("this impossible");
    }
}
console.log(postyear(2022));