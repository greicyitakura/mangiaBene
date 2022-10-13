import { fetchProducts } from 'api';
import { useEffect, useState } from 'react';
import { Product } from 'types/product';
import OrderLocation from './OrderLocation';
import StepsHeaders from './StepsHeaders';

import './styles.css';
import { OrderLocationdata } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
     }, []);

  
  return (
    <div className="orders-container">
      <StepsHeaders />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  );
}

export default Orders;
