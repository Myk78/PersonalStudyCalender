import "./style.css";
import"./utility.css";

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
<ChoiceFrom/>
<main class="main">
<Category/>
<Factlist/>
</main>
</>
  );
} 
function ChoiceFrom(){
  return<form className="choicefrom">fact form</form>;    
  // <aside>hello jdfkdkfnkds </aside>
}
function Category(){
  return <aside>Category filter</aside>;
}
function Factlist(){
  return <section>Factlist</section>;
}
export default App; 