import './styles.css';

import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./User";


const Admin = () => {
  return (
  <div className="admin-container">
    <Navbar />
    <div className="admin-content">
      <Switch>
        <Route path="/admin/products">
          <h1>product CRUD</h1>
        </Route>
        <Route path="/admin/categories">
          <h1>Category CRUD</h1>
        </Route>
        <Route path="/admin/users">
          <Users />
        </Route>
      </Switch>
    </div>
  </div>
  )
};

export default Admin;
