import React from 'react';
import { useState } from 'react';
import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';

export type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } =
    useShoppingCart();

    return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {/* {cartItems.map((cartItem) => (
            <CartItem quantity={0} product={product} />
          ))} */}

          <Link to="/orders">
            <Button className="me-auto fw-bold fs-5">Finalizar pedido</Button>
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
