import './styles.css';


import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { User } from 'types/user';

type Props = {
  user: User;
  onDelete: Function;
};

const CategoryCrudCard = ({ user, onDelete }: Props) => {
  const handleDelete = (userId: number) => {
    if(!window.confirm("Deseja cancelar?")) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/users/${userId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="base-card product-crud-card">
     
      <div className="product-crud-card-description">
        <div className="product-crud-card-bottom-container">
          <h6>{user.email}</h6>
        </div>
        
      </div>
      <div className="product-crud-card-buttons-container">
        <button
          onClick={() => handleDelete(user.id)}
          className="btn btn-outline-danger product-crud-card-button-first"
        >
          Excluir
        </button>
        <Link to={`/admin/users/${user.id}`}>
          <button className="btn btn-outline-secondary product-crud-card-button">
            Editar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCrudCard;
