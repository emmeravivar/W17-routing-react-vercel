import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>W17</h1>
      <div>
        <h2>Navegador</h2>
        <ul className="navegador">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <div className="load">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
