import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Admin from "./screens/Admin";
import Home from "./screens/Home";
import Teacher from "./screens/Teacher";
import Student from "./screens/Student";
import NotFound from "./screens/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/student" component={Student} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
