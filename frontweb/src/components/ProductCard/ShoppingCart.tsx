import { useEffect, useMemo, useState } from 'react';
import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatPrice } from 'util/formatters';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';

export type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, cartProducts, getCartProducts } =
    useShoppingCart();

  const calculateTotalAmount = (): number => {
    const selectedItems = cartItems.map((item) => cartProducts[item.id]?.price * item.quantity);
    return selectedItems.reduce((acc, value) => acc + value)
  }

  const totalAmount = useMemo<number>(calculateTotalAmount, [cartItems, cartProducts])

  useEffect(() => {
    getCartProducts();

  }, [cartItems, getCartProducts]);

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

          <Link to="/orders">
            <Button className="me-auto fw-bold fs-5">Finalizar pedido</Button>
          </Link>
        </Stack>
        <p><b>Total: {formatPrice(totalAmount)}</b></p>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
