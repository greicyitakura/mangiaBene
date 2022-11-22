import { useEffect, useState } from 'react';
import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';

export type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, cartProducts, getCartProducts } =
    useShoppingCart();

  const [hasCartProducts, setHasCartProducts] = useState(false);

  useEffect(() => {
    getCartProducts();
    console.log('produtos');
  }, [cartItems]);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((cartItem) => (
            <CartItem
              product={cartProducts[cartItem.id]}
              quantity={cartItem.quantity}
              key={cartItem.id}
            />
          ))}
          <Link to={'/orders'}>
        
            <Button className="me-auto fw-bold fs-5">Finalizar pedido</Button>
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
