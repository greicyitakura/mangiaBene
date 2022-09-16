import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/Admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
