import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>React Dictionary</h1>
<Search defaultKeyword="forest"/>
    </div>
    <footer className="myCode"><small><a href="https://github.com/apipich/DictionaryProject_React" target="_blank" rel="noopener noreferrer">Open-source code</a> by Amanda Pipich</small></footer>
    </div>
  );
}
