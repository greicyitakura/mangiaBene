import { CartItem } from 'components/ProductCrudCard/CartItem';
import { Offcanvas, Stack } from 'react-bootstrap';
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

      </Stack>
    </Offcanvas.Body>
  </Offcanvas>
)
}
