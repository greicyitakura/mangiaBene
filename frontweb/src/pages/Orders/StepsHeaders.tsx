const StepsHeader = () => {
    return (
    <header className="orders-steps-container">
        <div className="orders-steps-content">
            <h1 className="steps-title">
                Para fazer seu pedido <br /> 
                Siga as etapas</h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                         Adicione sua localização
                    </li>
                    <li>
                        <span className="steps-number">2</span>
                        Confira seus produtos
                    </li>
                    <li>
                        <span className="steps-number">3</span>
                        Depois clique em <strong>"Enviar Pedido"</strong>
                    </li>
                </ul>
        </div>
    </header>
    );
  };
  
  export default StepsHeader;
  