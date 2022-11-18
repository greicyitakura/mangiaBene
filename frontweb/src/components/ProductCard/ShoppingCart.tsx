import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { formatPrice } from 'util/formatters';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';

export type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((product) => (
            <CartItem product={product} key={product.id} {...product} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total: <span>R$</span>
            {/* <h4>{formatPrice((product?.price || 0) * quantity)}</h4> */}
          </div>

          <Link to="/orders">
            <Button className="me-auto fw-bold fs-5">Finalizar pedido</Button>
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
