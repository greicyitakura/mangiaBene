import './styles.css';

import {ReactComponent as AuthImage} from 'assets/images/manager.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

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
                    <Route path="/admin/auth/singup">
                        <h1>Card de singup</h1>
                    </Route>
                    <Route path="/admin/auth/recover">
                        <h1>Card de recover</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Auth;