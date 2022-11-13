
import { Route, Switch } from 'react-router';
import Form from './Form';
import List from './List';

const Categories = () => {
  return (
    <Switch>
      <Route path="/admin/categories" exact>
        <List />
      </Route>
      <Route path="/admin/categories/:categoriesId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Categories;
