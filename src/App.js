import logo from './favicon.ico';
import './App.css';
import Dictionary from "./dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <h1><img src={logo} className ="logo" alt="logo"/>Dictionary With Narges</h1>
      </header>
      <div className="main">
        <Dictionary defaultWord="free"/>
      </div>
      <footer className="tex-center">
        open source code by <a href="https://www.shecodesfoundation.org/candidates/narges-safari-sohrforouzani-iranian" rel="noreferrer">Narges</a></footer>
    </div></div>
  );
}


