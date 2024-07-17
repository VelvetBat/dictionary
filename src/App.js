import Garden from "./Garden.jpg";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
          <img src={Garden} className="garden" alt="garden" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by Rebecca Z
        </footer>
      </div>
    </div>
  );
}
