import { Button, Stack } from 'react-bootstrap';
import { Product } from 'types/product';
import { useShoppingCart } from './ShoppingCartContext';

type CartItemProps = {
  product: Product;
  quantity: number;
};

export function CartItem({ product, quantity }: CartItemProps) {

  return (

      <Button>&times;</Button>
  );
}
