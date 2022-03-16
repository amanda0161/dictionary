import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project is{" "}
            <a
              href="https://github.com/amanda0161/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            and was coded by {"  "}
            <a
              href="https://www.urbexadventure.com/"
              target="_blank"
              rel="noreferrer"
            >
              Amanda Charlesworth
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
