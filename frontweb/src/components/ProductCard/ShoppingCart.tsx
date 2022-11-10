
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
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem product={{
              id: 1,
              name: 'ANTEPASTOS',
              description:
                'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.',
              price: 32.5,
              imgUrl:
                'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
              date: '2022-07-13T20:50:07.123450Z',
              categories: [
                {
                  id: 1,
                  name: 'Entradas',
                },
              ],
            }} key={item.id} {...item}/>
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Total: <span>R$</span>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
