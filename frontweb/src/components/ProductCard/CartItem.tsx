import { useShoppingCart } from 'components/ProductCrudCard/ShoppingCartContext';
import { Product } from 'pages/Orders/types';
import { Button, Stack } from 'react-bootstrap';


type CartItemProps = {
  product: Product
  quantity: number;
};

export function CartItem({ product, quantity }: CartItemProps) {
  return (
  
    <img src={product.imageURI} style={{width: "125px", height:"75px", objectFit: "cover"}} />
    
  );
}
