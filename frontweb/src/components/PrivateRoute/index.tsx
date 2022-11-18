
import { Redirect, Route } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from 'util/auth';

type Props = {
  children: React.ReactElement;
  path: string;
  roles?: Role[];
};


const PrivateRoute = ({ children, path, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      render={({location}) => {
        if(!isAuthenticated()){
          return <Redirect to={{
            pathname: '/admin/auth/login',
            state: { from: location },
          }}/>
        }
        if(!hasAnyRoles(roles)){
          return  <Redirect to="/admin/products" />
        }
        return children
      }}
    />
  );
};

export default PrivateRoute;
