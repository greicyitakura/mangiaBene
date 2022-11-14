import './styles.css';

import {ReactComponent as AuthImage} from 'assets/images/manager.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import SingUp from './SingUp';
import Recover from './Recover';

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Altere os produtos do seu menu</h1>
                <p>Você como gerente ou garçom pode realizar a troca de informações relevantes do menu.</p>
                <AuthImage />
            </div>
            <div className='auth-form-container'>
                <Switch>
                    <Route path="/admin/auth/login">
                       <Login />
                    </Route>
                    <Route path="/admin/auth/register">
                      <SingUp />
                    </Route>
                    <Route path="/admin/auth/recover">
                    <Recover />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Auth;