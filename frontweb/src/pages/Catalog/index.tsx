import './styles.css';

import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import { useEffect, useState } from 'react';
import Pagination from 'components/Pagination';
import { SpringPage } from 'types/vendor/spring';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import CardLoader from './CardLoader';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoanding, setIsLoandin] = useState(false);

  const getProducts = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: pageNumber,
        size: 8,
      },
    };
    setIsLoandin(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoandin(false);
      });
  }


  useEffect(() => {
    getProducts(0);
  },[]);
     
  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Menu</h1>
      </div>
      <div className="row">
        {isLoanding ? (
          <CardLoader />
        ) : (
          page?.content.map((product) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })
        )}
      </div>
      <div className="row">
        <Pagination pageCount={page ? page.totalPages : 0} range={3}  onChange={getProducts}/>
      </div>
    </div>
  );
};

export default Catalog;
