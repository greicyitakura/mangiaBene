import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="card-bottom-container">
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </div>
      <Link to="/orders">
        <ButtonIcon text="Adicionar ao pedido" />
      </Link>
    </div>
  );
};

export default ProductCard;
