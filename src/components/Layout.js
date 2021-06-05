import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Li = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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

function Layout() {
  return (
    <header>
      <Router>
        <nav>
          <Ul>
            <Li>
              <Link to="/">Hesapla</Link>
            </Li>
            <Li>
              <Link to="/history">Geçmiş Hesaplarım</Link>
            </Li>
          </Ul>
        </nav>

        <Switch>
          <Route path="/history"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </header>
  );
}

export default Layout;
