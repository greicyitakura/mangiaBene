import './assets/styles/custom.scss';
import './App.css';

import Routes from 'Routes';
import { AuthContext, AuthContextData } from 'AuthContext';
import { useState } from 'react';
import { ShoppingCartProvider } from 'components/ProductCard/ShoppingCartContext';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <ShoppingCartProvider>
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
    </ShoppingCartProvider>
  );
}

export default App;
