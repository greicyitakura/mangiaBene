import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import { useShoppingCart } from './ShoppingCartContext';
import { Button } from "react-bootstrap"

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={product.imgUrl} alt={product.name} style={{objectFit: "cover"}} />
      </div>
      <div className="card-bottom-container">
        <h6>{product.name}{product.categories}</h6>
        <ProductPrice price={product.price} />
      </div>

      <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(product.id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(product.id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(product.id)}>+</Button>
              </div>
              <Button variant="danger"
                size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
    </div>
  );
};

export default ProductCard;
