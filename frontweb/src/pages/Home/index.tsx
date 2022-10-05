import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';

import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h1>Conheça o melhor restaurante italiano de Guarulhos</h1>
          <p>
            Criado pela Nona Antonella que nos deixou com suas fantásticas
            receitas o restaurante Mangia Bene é referência em comida típica
            italiana. Almoçar ou jantar é saborear pratos que seguem os padrões
            de produção desde sua criação, entrega rápida e segura, pois nossos
            pratos chegam acondicionados em recipientes especiais que conservam
            o sabor de seu pedido.
          </p>
        
        <Link to="/products" >
        <ButtonIcon />
        </Link>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
