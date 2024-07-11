import Garden from "./Garden.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      Meow
      <img src={Garden} className="garden" alt="garden picture" />
    </div>
  );
}
