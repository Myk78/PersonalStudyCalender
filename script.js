
// use innerhtml we remove the all context of list and try to fetch the in other like databases but now we put data in this file class name initialclass it
const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];

const factlist=document.querySelector(".factlist");
// Creating DOM Element render fact in list
factlist.innerHTML="";
// create a =function so we call him dynamicly so we dn't use initialFacts every time..

// now first if we create a function so we store the data in then make it
createdFactslist(initialFacts); // now you see i store the data first in function and also its called a declare



// color array
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
// THis is template string function 
function createdFactslist(data){
  const DataArr= data.map(
    (list) =>`<li class="list"> 
    <p>
    ${list.text}
    <span><a class="sourcelink" href="${list.source}" target="_blank">(Source)</a></span>
    </p>
    <span class="ptag" style="background-color: #3b82f6;">
    ${list.category}</span></li>`);
    // now color of every fact is same so now we add color array and change the color in react framework
  const arr = DataArr.join("");
  factlist.insertAdjacentHTML("afterbegin",arr);
}


// load/Fetch data from supabase
// now we call a sync function its a fast to give you data from databases and other and its give all information about dataTable


async function loadfacts(){
  const response = await fetch("https://ompezwxwarbmplmwesgf.supabase.co/rest/v1/facts",
  {
    headers: {
      apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcGV6d3h3YXJibXBsbXdlc2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3MjMyMDksImV4cCI6MjAwNTI5OTIwOX0.sKubOhCCVR1WZRg2m2LnGUIgNPfVgUS000h0WBhplL4",
      authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcGV6d3h3YXJibXBsbXdlc2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3MjMyMDksImV4cCI6MjAwNTI5OTIwOX0.sKubOhCCVR1WZRg2m2LnGUIgNPfVgUS000h0WBhplL4",
    },
  });
  // json is data format same as like Js Object and convert tha data in read able for human
  const data = await response.json();
  // console.log(data);
  createdFactslist(data);
}
loadfacts();





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

// foreachloop 
[2,4,6,8,10].forEach(function(el){
    console.log(el);
});
// map function is use to create a new array idle its not possible in foreach
const v=[2,4,6,8,10].map(function(el){
    return 10*el;
});
console.log(v);

