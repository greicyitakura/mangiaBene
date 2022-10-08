import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';
import Orders from 'pages/Orders';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path= "/orders">
        <Orders />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
