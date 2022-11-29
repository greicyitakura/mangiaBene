import { useEffect, useMemo } from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { formatPrice } from 'util/formatters';
import { CartItem } from './CartItem';
import { useShoppingCart } from './ShoppingCartContext';
import ButtonIcon from 'components/ButtonIcon';
import { Link, useHistory } from 'react-router-dom';

export type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const history = useHistory();

  const { closeCart, cartItems, cartProducts, getCartProducts } =
    useShoppingCart();

  const calculateTotalAmount = (): number => {
    if (cartItems.length === 0) return 0
    
    const selectedItems = cartItems.map(
      (item) => cartProducts[item.id]?.price * item.quantity
    );
    return selectedItems.reduce((acc, value) => acc + value);
  };

  const totalAmount = useMemo<number>(calculateTotalAmount, [
    cartItems,
    cartProducts,
  ]);

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

          <div className="me-auto">
            <h2>
              <b>Total: {formatPrice(totalAmount)}</b>
            </h2>
          </div>
          <Link to="/orders" >
        <ButtonIcon text="Finalizar pedido" />
        </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
