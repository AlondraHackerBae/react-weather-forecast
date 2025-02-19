import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Weather app</h1>
      <footer>
        This project was coded by{" "}
        <a href="https://meetalondra.netlify.app/" target="_blank">
          Alondra Turner{" "}
        </a>
        and is open-sourced on{" "}
        <a
          href="https://github.com/AlondraHackerBae/react-weather-forecast"
          target="_blank"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
