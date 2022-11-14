import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';
import './styles.css';
import { User } from 'types/user';
import { useForm } from 'react-hook-form';

export type UserFilterData = {
  name: string;
  email: string;
  cargo: string;
};

type Props = {
  onSubmitFilter: (data: UserFilterData) => void;
};

const UserFilter = ({ onSubmitFilter }: Props) => {
  const [selectUsers, setSelectUsers] = useState<User[]>([]);

  const { register, handleSubmit, setValue, getValues, control } =
    useForm<UserFilterData>();

  const onSubmit = (formData: UserFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
    setValue('email', '');
    setValue('cargo', '');
  };


  useEffect(() => {
    requestBackend({ url: '/users' }).then((response) => {
      setSelectUsers(response.data.content);
    });
  }, []);

  return (
    <div className="base-card product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Nome do Funcionário"
            name="name"
          />
           <div className="product-filter-name-container">
          <input
            {...register('email')}
            type="text"
            className="form-control"
            placeholder="Email do Funcionário"
            name="email"
          />
          </div>
          <div className="product-filter-name-container">
          <input
            {...register('cargo')}
            type="text"
            className="form-control"
            placeholder="Cargo do Funcionário"
            name="cargo"
          />
          </div>
          <button className="product-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="product-filter-bottom-container">
         
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-product-filter-clear"
          >LIMPAR
            <span className="btn-product-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
