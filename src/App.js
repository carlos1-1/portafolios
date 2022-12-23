import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./components/Home/home";
import Transition from "./components/Transition/transition";
import TransitionSkill from "./components/Skills/TransitionSkill/transition";
import TransitionProyects from "./components/Projects/TransitionProyects/transition";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutMe" component={Transition} />
        <Route exact path="/Skills" component={TransitionSkill} />
        <Route exact path="/Proyects" component={TransitionProyects} />
      </div>
    </BrowserRouter>
  );
}

export default App;
