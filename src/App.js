import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <About></About>
    </div>
  );
}

export default App;
