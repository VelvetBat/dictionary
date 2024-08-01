import books from "./books.avif";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
          <img src={books} className="garden" alt="garden" />
        </header>
        <main>
          Discover:
          <Dictionary />
        </main>
        <footer className="app-footer">Coded by Rebecca Z</footer>
      </div>
    </div>
  );
}
