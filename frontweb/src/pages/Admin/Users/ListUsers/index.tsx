import DefaultFilters from "components/DefaultFilter";
import CardLoader from "pages/Catalog/CardLoader";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { UserResponse } from "types/user";
import { makePrivateRequest } from "util/requests";
import CardUser from "../CardUser";



const ListUsers = () => {
  const [userResponse, setUserResponse] = useState<UserResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const [name, setName] = useState('');
  const [direction, setDirection] = useState('DESC');
  const [optionValue, setOptionValue] = useState(-1); 

  const handleChangeName = (name: string) => {
    setName(name);
    setActivePage(0);

  }

  const handleChangeDirection = (direction: string) => {
    setDirection(direction);
    setActivePage(0);
    setOptionValue(direction === 'ASC' ? 1 : 0);
  }

  const clearFilters = () => {
    setActivePage(0);
    setDirection('DESC');
    setName('');
    setOptionValue(-1);
  }

  const onRemove = (userId: number) => {
    const confirm = window.confirm('Deseja realmente excluir este usuário?');

    if (confirm) {
      makePrivateRequest({ url: `/users/${userId}`, method: 'DELETE' })
        .then(() => {
          getUsers();
          toast.info('Usuário removido com sucesso!')
        })
        .catch(() => {
          toast.error('Erro ao remover o usuário!')
        })
    }
  }

  const getUsers = useCallback(() => {
    const params = {
      name: name,
      page: activePage,
      linesPerPage: 4,
      direction:  direction,
      orderBy: 'id'
    }
    setIsLoading(true);
    makePrivateRequest({ url: '/users', params })
      .then(response => setUserResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage, name, direction])

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleCreate = () => {
    history.push('/admin/users/create');
  }

  return (
    <div className="admin-user-list">
      <div className="filter">
        <button className="btn btn-primary btn-lg" onClick={handleCreate} >
          ADICIONAR
        </button>
        <DefaultFilters
          name={name}
          placeholderText={'usuários'}
          handleChangeName={handleChangeName}
          clearFilters={clearFilters}
          handleChangeDirection={handleChangeDirection}
          optionValue={optionValue}

        />
      </div>
      <div className="admin-list-container">
        {isLoading ? <CardLoader /> : (
          userResponse?.content.map(user => (
            <CardUser user={user} onRemove={onRemove} key={user.id} />
          ))
        )}

        {userResponse}
      </div>
    </div>
  );

}

export default ListUsers;

// type ControlComponentsData = {
//   activePage: number;
//   filterData: UserFilterData;
// };

// const ListU = () => {
//   const [page, setPage] = useState<SpringPage<User>>();

//   const [controlComponentsData, setControlComponentsData] =
//     useState<ControlComponentsData>({
//       activePage: 0,
//       filterData: {name: '', email: '', cargo: '' },
//     });

//   const handlePageChange = (pageNumber: number) => {
//     setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
//   };

//   const handleSubmitFilter = (data: UserFilterData) => {
//     setControlComponentsData({ activePage: 0, filterData: data });   
//   };

//   const getUsers = useCallback(() => {
//     const config: AxiosRequestConfig = {
//       method: 'GET',
//       url: '/users',
//       params: {
//         page: controlComponentsData.activePage,
//         size: 2,
//         name: controlComponentsData.filterData.name,
//       },
//     };

//     requestBackend(config).then((response) => {
//       setPage(response.data);
//     });
//   }, [controlComponentsData]);

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

//   return (
//     <div className="product-crud-container">
//       <div className="product-crud-bar-container">
//         <Link to="/admin/users/create">
//           <button className="btn btn-success text-white btn-crud-add">
//             ADICIONAR
//           </button>
//         </Link>
//         <UserFilter onSubmitFilter={handleSubmitFilter} />
//       </div>
//       <div className="row">
//         {page?.content.map((user) => (
//           <div key={user.id} className="col-sm-6 col-md-12">
//             <CardUser user={user} onRemove={getUsers} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListU;
