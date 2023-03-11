import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>
              Not Found Page
          </div>
        </Route>
      </Switch>
  );
}

export default App;
