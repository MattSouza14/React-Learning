
import Article from "./components/Article/Article";
import Navbar from "./components/Navbar/navBar";
import "./styles/App.css"

function App() {
  return (
   <>
    <Navbar />
    
    <section id="articles">
      <Article  tittle ="newsJamesWeb"/>
      <Article />
      <Article />
      <Article />


    </section>


   </>

  );
}

export default App;
