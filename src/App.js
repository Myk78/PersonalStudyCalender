import { useEffect, useState } from "react";
import supabase from "./supabase";
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
  // three part of state first define state var 
  const [show,setshow]=useState(false);
  const [fact, setfact] = useState(initialFacts);
  useEffect( function () {
    async function getfacts(){
      const { data: facts, error } = await supabase
      .from("facts")
      .select("*");
      console.log(facts);
          }
       getfacts();
  },[]);
 
  return (
    <>
{/* now we create instance of show setshow in Header */}
< Header show={show} setshow={setshow}/>
{/* Second declare state vr */}
{show ? <ChoiceFrom setfact={setfact} setshow={setshow}/> : null}
<main className="main">
<Category/>
<Factlist fact={fact}/>
</main>
</>
  );
} 
function Header({show,setshow}){
  return( <header className="header">
  <div className="head">
          <img src="logo.png" alt="today i learned" height="60vh" width="60vw" />
          <h1>today i learned</h1>
  </div>
<button className="btn btn-large btn-open "onClick={()=>setshow((show)=>!show)}>{show ? "Close":"share a fact"}</button>
</header>);
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
// function to valid url is actually url or it string
function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function ChoiceFrom({setfact, setshow}){
  const [text,settext]=useState("");
  const [source,setsource]=useState("https:example.com");
  const [category,setcategory]=useState("");
  const textlength =text.length;
 
  function handleSubmit(e) {
    // 1. Prevent browser reload
    e.preventDefault();
    console.log(text,source,category)


    // 2. Check if data is valid. If so,create a new fact
    if(text&&isValidHttpUrl(source)&&category&&textlength<=200){
      console.log("the data is valid");
    }



    // 3. Create a new Fact object
    const newFact={
      id:  Math.round(Math.random()*10000),
      text,
      source,
      category,
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: new Date().getFullYear(),
    }

    // 4. Add the new fact to the Ui: add the fact to state
    setfact((fact)=>[newFact, ...fact]);
    // 5. React input fields
    settext("");
    setsource("");
    setcategory("");
    
    // 6. close the from 
    setshow(false);

  }
  return(
    <form className="choicefrom" onSubmit={handleSubmit}>
    <input type="text" placeholder="Share a fact with a world..." value={text} onChange={(e)=>settext(e.target.value)}/>
    <span>{200-textlength}</span>
    <input type="text" placeholder="Trustworthly spruce...."value={source} onChange={(e)=>setsource(e.target.value)}/>
    <select name="" id=""value={category} onChange={(e)=>setcategory(e.target.value)}>
        <option value="">Categories</option>
        {CATEGORIES.map((cate)=>(<option key={cate.name} value={cate.name}>{cate.name.toUpperCase()}</option>))}
    </select>
    <button className="btn btn-large">post</button>
</form>
  );   
} 


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
function Factlist({fact}){
  // temporary
  

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