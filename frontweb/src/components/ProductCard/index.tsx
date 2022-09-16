import './styles.css';

import ProductImg from 'assets/images/canolli.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {
    return (
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={ProductImg} alt="Canolli" />
            </div>
            <div className='card-bottom-container'>
                <h6>Canolli</h6>
                <ProductPrice />
            </div>
        </div>

    );
}

export default ProductCard;