import './App.css';
import Layout from './components/Layout';
import Description from './components/Description';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [kilo, setKilo] = useState(0);
  const [boy, setBoy] = useState(0);
  const [BIM, setBIM] = useState(0);

  function calculate() {
    const kg = Number(kilo);
    const cm = Number(boy) / 100;

    const calculatedBIM = kg / Math.pow(cm, 2);

    setBIM(calculatedBIM);

    //kilo / (boy)*(boy)  (metre cinsinden)
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>

      <Layout />

      <Description />
      <form>
        <label>
          Kilonuzu giriniz
          <input
            type="number"
            name="Kilo"
            onChange={(event) => setKilo(event.target.value)}
          />
        </label>

        <label>
          Boyunuzu giriniz
          <input
            type="number"
            name="Boy"
            onChange={(event) => setBoy(event.target.value)}
          />
        </label>
        <buttun onClick={calculate}>hesapla</buttun>
      </form>

      <h1>{BIM}</h1>
    </div>
  );
}

export default App;
