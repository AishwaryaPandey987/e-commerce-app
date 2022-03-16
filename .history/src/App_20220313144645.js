import React from 'react';
import { Switch} from 'react-router';
import Home from './pages/Home';
import Homepage from "./components/Homepage";
import CategoryPage from './components/Categorypage';
import Category from './pages/Category';


function App() {
  return (
    <Switch >
      <Homepage path = "/home">
<Home/>
      </Homepage>
      <CategoryPage path = "/">
        <Category/>
      </CategoryPage>
    </Switch>
  );
}

export default App;
