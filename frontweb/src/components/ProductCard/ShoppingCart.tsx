
import { Offcanvas, Stack } from 'react-bootstrap';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Carrinho</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
      I will not close if you click outside of me.
      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
)
}
