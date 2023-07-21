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
        return `This Fact ${y} is year old`;
    }else{
        return `this impossible year. Year needs be equal or less then current year ${curr}`;
    }
}
console.log(postyear(2022));

// Arrow function is second type to write a function but in one line
// const postyear1 = (year) => 2023 -year; this is one line function it dn't take any condition
// if you add any condition on arrowfunction so use turneyoperater on then
const postyear1 = (year) => year<= new Date().getFullYear()? `this fact is ${new Date().getFullYear()-year} year old`:`This is invalid year. year is less or equal to ${new Date().getFullYear}`
console.log(postyear1(2021));

// turnay operator
let interstingVote = 5;
let MindblowingVote = 7;
const totalvote = interstingVote + MindblowingVote;
let falseVote = 8
// turnay operator is here
const mes = totalvote > falseVote ? "The fact is true":"Might be the fact is false";
console.log(mes);

// String 
/* In string we study templatestring is for this we `` this symbol in templatestring we also add variable and function
*/

let text = "Portugal hold world best player in football";
const temp = `The fact is "${text}" ${postyear(2019)}`; // now you see i add variable and function both in template
console.log(temp);

// Object
const obj ={
    createdIn:"je",

}
const{createdIn}=obj;
console.log(obj.createdIn.toUpperCase());
