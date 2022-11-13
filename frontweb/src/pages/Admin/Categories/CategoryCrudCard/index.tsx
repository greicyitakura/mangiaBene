import './styles.css';


import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Category } from 'types/category';

type Props = {
  category: Category;
  onDelete: Function;
};

const CategoryCrudCard = ({ category, onDelete }: Props) => {
  const handleDelete = (categoryId: number) => {
    if(!window.confirm("Deseja cancelar?")) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/categories/${categoryId}`,
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
          <h6>{category.name}</h6>
        </div>
        
      </div>
      <div className="product-crud-card-buttons-container">
        <button
          onClick={() => handleDelete(category.id)}
          className="btn btn-outline-danger product-crud-card-button-first"
        >
          Excluir
        </button>
        <Link to={`/admin/category/${category.id}`}>
          <button className="btn btn-outline-secondary product-crud-card-button">
            Editar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCrudCard;
