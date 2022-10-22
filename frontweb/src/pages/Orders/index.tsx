
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { fetchProducts } from 'util/requests';
import OrderSummary from './OrderSummary';
import StepsHeaders from './StepsHeaders';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import './styles.css';
import { OrderLocationdata } from './types';
import AddressForm from './AddressFrom';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
     }, []);

  
  return (
    <>
    <div className="based-card product-details-card">
    <Link to="/products">
      <div className="goback-container">
        <ArrowIcon />
        <h2>Voltar</h2>
      </div>
    </Link>
    </div>
    
    <div className="orders-container">
      <StepsHeaders />
      <AddressForm />
      <OrderSummary />
    </div>
    </>
  );
}

export default Orders;
