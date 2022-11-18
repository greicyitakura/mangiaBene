import { Route, Switch } from "react-router";
import FormUsers from "./FormUsers";
import ListUsers from "./ListUsers";

 
const Users = () => {
  return (

    <div>
      <Switch>
        <Route path="/admin/users" exact>
          <ListUsers />
        </Route>

        <Route path="/admin/users/:userId">
          <FormUsers />
        </Route>

      </Switch>
    </div>

  );
}

export default Users;