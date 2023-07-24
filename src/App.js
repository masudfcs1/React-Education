import "./App.css";
import Header from "./components/common/heading/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {" "}
          <Route path="/" exact component={Home} />{" "}
          <Route path="/about" exact component={About} />{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
