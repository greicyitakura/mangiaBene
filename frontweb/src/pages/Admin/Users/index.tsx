import { Route, Switch } from "react-router";
import FormUser from "./FormUser";
import ListUsers from "./ListUsers";

 
const Users = () => {
  return (

    <div>
      <Switch>
        <Route path="/admin/users" exact>
          <ListUsers />
        </Route>

        <Route path="/admin/users/:userId">
          <FormUser />
        </Route>

      </Switch>
    </div>

  );
}

export default Users;