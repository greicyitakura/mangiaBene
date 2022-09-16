import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Conheça o melhor restaurante italiano de Guarulhos</h1>
            <p>
              Criado pela Nona Antonella que nos deixou com suas fantásticas
              receitas o restaurante Mangia Bene é referência em comida típica
              italiana. Almoçar ou jantar é saborear pratos que seguem
              os padrões de produção desde sua criação, entrega rápida e segura,
              pois nossos pratos chegam acondicionados em recipientes especiais
              que conservam o sabor de seu pedido.
            </p>
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
