import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useLocation,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";

import KNavbar from "./components/KNavbar";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";

function App() {
  return (
    <div className="App">
      <KNavbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/delete" component={Delete} />
        {/* <Redirect from="*" to="/">
            <Home />
          </Redirect> */}
      </Router>
    </div>
  );
}

export default App;
