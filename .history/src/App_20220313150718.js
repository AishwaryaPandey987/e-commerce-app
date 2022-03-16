import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Homepage from './components/Homepage';
import CategoryPage from './components/Categorypage';
import Category from './pages/Category';

function App() {
  return (
    <Switch>
      <Route>

      <Homepage path="/home">
        <Home />
      </Homepage>
      <CategoryPage path="/">
        <Category />
      </CategoryPage>
      </Route>
    </Switch>
  );
}

export default App;
