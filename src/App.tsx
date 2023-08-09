import './App.css';
import Portfolio from "./Components/Portfolio";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
      <div className="App">
        <div className="w3-content w3-margin-top">
          <div className="w3-row-padding">
            <Left/>
            <Right/>
          </div>
        </div>
        <Skills/>
        <Portfolio/>
        <Footer/>
      </div>
  );
}

export default App;
