import { Offcanvas, Stack } from 'react-bootstrap';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack gap={3}>
      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
)}
