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
     
      <div className="me-auto">
        <div>
          {product.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.95rem' }}>
              X{quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          <span>R$ unidade</span>
          <h5>{formatPrice(product.price)}</h5>
        </div>
      </div>

      <h4>R$ {formatPrice(product.price * quantity)}</h4>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(product.id)}>&times;
      </Button>
    </Stack>
  );
}
