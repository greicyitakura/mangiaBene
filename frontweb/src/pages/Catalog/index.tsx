import './styles.css';

import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import { SpringPage } from 'types/vendor/spring';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/requests';
import CardLoader from './CardLoader';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoanding, setIsLoandin] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/products",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12,
      },
    };
    setIsLoandin(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoandin(false);
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Menu</h1>
      </div>
      <div className="row">
        {isLoanding ? <CardLoader /> : (
          page?.content.map((product) => {
          return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to="/products/1">
                <ProductCard product={product} />
              </Link>
            </div>
          );
        }))}
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
