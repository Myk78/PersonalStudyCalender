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