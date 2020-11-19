import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Jobs from './pages/Jobs/Jobs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
