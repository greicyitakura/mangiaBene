
import { Route, Switch } from 'react-router';
import Form from './Form';
import List from './List';

const Users = () => {
  return (
    <Switch>
      <Route path="/admin/users" exact>
        <List />
      </Route>
      <Route path="/admin/users/:usersId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Users;
