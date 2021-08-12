import styled from '@emotion/styled';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Calculator = lazy(() => import("../views/Calculator"));
const Container = styled.div`
  width:100%;
  height:100%;
  margin:0px;
  padding:0px;
  min-height:100vh;
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<h2>Loading Route</h2>}>

        <Router>
          <Switch>
            <Route path="/">
              <Calculator />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Container>
  );
}

export default App;
