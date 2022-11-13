import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from 'types/category';
import { User } from 'types/user';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  usersId: string;
};

const FormC = () => {
  const { usersId: userId } = useParams<UrlParams>();

  const isEditing = userId !== 'create';

  const history = useHistory();

  const [selectUsers, setSelectUsers] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<User>();

  useEffect(() => {
    requestBackend({ url: '/users'}).then((response) => {
      setSelectUsers(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/users/${userId}` }).then((response) => {
        const user = response.data as User;

        setValue('id', user.id);
      });
    }
  }, [isEditing, userId, setValue]);

  const onSubmit = (formData: User) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/users/${userId}` : '/users',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Categoria cadastrada com sucesso');
        history.push('/admin/users');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar usuário');
      });
  };

  const handleCancel = () => {
    history.push('/admin/users');
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO USUARIO</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('nome', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.nome ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome do usuário"
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.nome?.message}
                </div>
              </div>

              <div className="margin-bottom-30">
                <input
                  {...register('email', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  placeholder="Email do usuário"
                  name="email"
                />
                <div className="invalid-feedback d-block">
                  {errors.email?.message}
                </div>
              </div>

            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-success product-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormC;
