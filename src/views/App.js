import styled from '@emotion/styled';
import { Header } from "./CalculatorCSS";

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Calculator = lazy(() => import("../views/Calculator"));
const Container = styled.div`
  width:100%;
  height:100%;
  margin:0px;
  padding:0px;
  min-height:100vh;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<h2>Loading Route</h2>}>
        <Router>
          <Switch>
            <Route path="/">
              <Header >Tip Calculator</Header>
              <Calculator />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Container>
  );
}

export default App;
