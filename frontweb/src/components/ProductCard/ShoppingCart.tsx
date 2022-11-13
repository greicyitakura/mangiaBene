
import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { formatPrice } from 'util/formatters';
import { useShoppingCart } from './ShoppingCartContext';

type ShoppingCartProps = {
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
          <div className="ms-auto fw-bold fs-5">
            Total:   <span>R$</span>
            {/* <h4>{formatPrice(product.price * quantity)}</h4> */}
          </div>
         
          <div>
          <Button>Finalizar pedido</Button>
          </div>

        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
