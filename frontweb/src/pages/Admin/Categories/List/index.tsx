import { AxiosRequestConfig } from 'axios';
import CategoryFilter, { CategoryFilterData } from 'components/CategoryFilter';
import Pagination from 'components/Pagination';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Category } from 'types/category';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CategoryCrudCard from '../CategoryCrudCard';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: CategoryFilterData;
};

const ListC = () => {
  const [page, setPage] = useState<SpringPage<Category>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', category: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: CategoryFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });   
  };

  const getCategories = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/categories',
      params: {
        page: controlComponentsData.activePage,
        size: 12,
        name: controlComponentsData.filterData.name,
        categoryId: controlComponentsData.filterData.category?.id
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/categories/create">
          <button className="btn btn-success text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <CategoryFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map((category) => (
          <div key={category.id} className="col-sm-6 col-md-12">
            <CategoryCrudCard category={category} onDelete={getCategories} />
          </div>
        ))}
      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ListC;
