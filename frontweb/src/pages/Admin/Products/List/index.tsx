import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import ProductCrudCard from '../ProductCrudCard';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  const handlePageChance = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const getProducts = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: controlComponentsData.activePage,
        size: 3,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
      <div className="product-crud-container">
        <div className="product-crud-bar-container">
          <Link to="/admin/products/create">
            <button className="btn btn-success text-white btn-crud-add">
              Adicionar
            </button>
          </Link>
          <ProductFilter onSubmitFilter={function (data: ProductFilterData): void {
          throw new Error('Function not implemented.');
        } } />
          </div>
        <div className="row">
          {page?.content.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-12">
              <ProductCrudCard product={product} onDelete={getProducts} />
            </div>
          ))}
        </div>
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChance}
        />
      </div>
  );
};

export default List;
