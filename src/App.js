import "./css/App.css";
import logo from "./assets/Dictionary.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} className="App-logo img-fluid" alt="logo" />

        <main>
          <Dictionary defaultKeyword="snow" />
        </main>
        <footer className="App-footer">
          <small>Coded By Shira Ohana</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
