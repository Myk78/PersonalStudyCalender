import { useState } from "react";
import "./style.css";
import"./utility.css";

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

function App(){   
  return (
    <>
   <header className="header">
  <div className="head">
          <img src="logo.png" alt="today i learned" height="60vh" width="60vw" />
          <h1>today i learned</h1>
  </div>
<button className="btn btn-large btn-open ">Share a Fact</button>
</header>
<Counter/>
<ChoiceFrom/>
<main className="main">
<Category/>
<Factlist/>
</main>
</>
  );
} 
function Counter(){
  const [count, setcount]=useState(0);
  return(
    <div>
      <span style={{fontSize:"40px"}}>{count}</span>
      <button className="btn btn-large" onClick={()=>setcount((c)=>c+1)}>+1</button>
    </div>
  );
}

function ChoiceFrom(){
  return<form className="choicefrom">fact form</form>;    
  // <aside>hello jdfkdkfnkds </aside>
}
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

function Category(){
  return <aside>
    <ul>
             <li>
                <button className="btn btn-forall">ALL</button>
            </li>
             {CATEGORIES.map((cat) =>
              <li key={cat.name}>
              <button  className="btn btn-forother tech" style={{backgroundColor:cat.color}}>{cat.name}
              </button>
          </li>)}
  </ul>
  </aside>;
}
function Factlist(){
  // temporary
  const fact = initialFacts;

  return <section>
    <ul className="factlist">{
      fact.map((fact)=>(
         <li key={fact.id} className="list">
                <p>
                    {fact.text}
                    <span><a className="sourcelink" href={fact.source} target="_blank">(Source)</a></span>
                </p>
                <span className="ptag" style={{backgroundColor: CATEGORIES.find((cat)=> cat.name==fact.category).color}}>{fact.category}</span>

                <div className="reaction-btn">
                <button>👍{fact.votesInteresting}</button>
                <button>🤯{fact.votesMindblowing}</button>
                <button>⛔️{fact.votesFalse}</button>
                </div>
            </li>




        // this is props but i dn,t understand why he dn,t work so i use above and comment this  if this so change the "(" map function with this "{"
        // <Fact fact={fact} key={fact.id}/>
      ))
    }
    </ul>
    </section>;
} 


//  this fact is make for conspect of props to create a every fact as a component but does work so comment this
// function Fact({fact}){
//   return <li  className="list">
//   <p>
//       {fact.text}
//       <span><a className="sourcelink" href={fact.source} target="_blank">(Source)</a></span>
//   </p>
//       <span className="ptag" style={{backgroundColor: CATEGORIES.find((cat)=> cat.name==fact.category).color}}>{fact.category}</span>

//    <div className="reaction-btn">
//     <button>👍{fact.votesInteresting}</button>
//     <button>🤯{fact.votesMindblowing}</button>
//     <button>⛔️{fact.votesFalse}</button>
//   </div>
// </li>
// }
export default App; 