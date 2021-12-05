import { BrowserRouter as Router, Route } from "react-router-dom";
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
      </Router>
    </div>
  );
}

export default App;
