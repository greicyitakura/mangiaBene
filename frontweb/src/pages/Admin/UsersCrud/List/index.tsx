import { AxiosRequestConfig } from 'axios';
import { CategoryFilterData } from 'components/CategoryFilter';
import Pagination from 'components/Pagination';
import { UserFilterData } from 'components/UserFilterData';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: UserFilterData;
};

const ListU = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', email: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };

  const handleSubmitFilter = (data: UserFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });   
  };

  const getUsers = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        name: controlComponentsData.filterData.name,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/users/create">
          <button className="btn btn-success text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        
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

export default ListU;
