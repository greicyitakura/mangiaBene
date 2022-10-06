import {ReactComponent as ArrowIcon} from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';

import './styles.css';

const ProductDetails = () => {
    
    return (
      <div className="product-details-container">
        <div className="based-card product-details-card">
            <div className="goback-container">
                <ArrowIcon/>
                <h2>Voltar</h2>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="img-container">
                        <img src="https://github.com/greicyitakura/mangiaBene/blob/main/pitII/imagens/antepasto.png?raw=true" alt="Nome do produto" />
                    </div>
                    <div className="name-price-container">
                        <h1>Nome do produto</h1>
                        <ProductPrice price={2345.67} />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="description-container">
                        <h2>Descrição do produto</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque!</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default ProductDetails;