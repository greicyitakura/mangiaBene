import { Stack } from 'react-bootstrap';
import { Product } from 'types/product';




type CartItemProps = {
  product: Product;
  quantity: number;
};

export function CartItem({ product, quantity }: CartItemProps) {

  return (
    <Stack direction='horizontal' gap={2}>
  
    <img src={product.imgUrl} style={{width: "125px", height:"75px", objectFit: "cover"}} />
    </Stack>
  );
}
