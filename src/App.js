import './App.css';
import Layout from './components/Layout';
import Description from './components/Description';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import History from './components/History';
import Calculation from './components/Calculation';

const Li = styled.li`
  font-size: 1.5em;
  text-align: center;
  margin-right: 20px;
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  margin-top: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Ul>
            <Li>
              <Link to="/">Hesapla</Link>
            </Li>
            <Li>
              <Link to="/history">History</Link>
            </Li>
          </Ul>
        </nav>

        <Switch>
          <Route path="/history">
            <div className="main">
              <Description />
              <History />
            </div>
          </Route>
          <Route path="/">
            <div className="main">
              <Description />
              <Calculation />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Deneme2() {
  return <h1>deneme 2</h1>;
}

export default App;
