import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';

const Li = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin-right: 20px;
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  background-color: #000;
  margin: 0;
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
              <Link to="/about">Hesapla</Link>
            </Li>
            <Li>Geçmiş Hesaplarım</Li>
          </Ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </header>
  );
}

export default Layout;
