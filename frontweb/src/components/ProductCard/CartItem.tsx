
import { Button, Stack } from 'react-bootstrap';
import { Product } from 'types/product';
import { formatPrice } from 'util/formatters';
import { useShoppingCart } from './ShoppingCartContext';

type CartItemProps = {
  quantity: number;
  product: Product;
};

export function CartItem({ quantity, product }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      
        <img
          src={product.imgUrl}
          style={{ width: '115px', height: '105px', objectFit: 'cover' }}
          alt=""
        />

      <div className="me-auto">
        <div>
          {product.name} {" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '1.5rem' }}>
              X{quantity}
            </span>
          )}
        </div>
        <div className='ms-auto text-muted' style={{ fontSize: '.5rem' }}>
        <span>R$</span>
            <h4>{formatPrice(product.price)}</h4>
        </div>
        <div className='text-muted' style={{ fontSize: '.65rem' }}>
        <span>R$</span>
            <h4>{formatPrice(product.price * quantity)}</h4>
        </div>
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(product.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
