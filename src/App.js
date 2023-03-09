import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>

      <Route exact={true} path="/">
        This is Home Page.
      </Route>

      <Route exact path="/starred">
        This is Starred Page.
      </Route>

      <Route>
        This is 404 Page.
      </Route>

    </Switch>
  );
}

export default App;
