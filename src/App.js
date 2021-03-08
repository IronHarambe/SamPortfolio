import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Project from "./components/project/Project";
import Skill from "./components/skills/Skill";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <About></About>
      <Project></Project>
      <Skill></Skill>
    </div>
  );
}

export default App;
