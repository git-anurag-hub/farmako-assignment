import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "./Home";
import Otp from "./Otp";
import "../styles/tailwind.css";

//  Container component for App. Includes routing.

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/otp" component={Otp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
