import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from 'types/category';
import { requestBackend } from 'util/requests';

import './styles.css';

type UrlParams = {
  categoryId: string;
};

const FormC = () => {
  const { categoryId } = useParams<UrlParams>();

  const isEditing = categoryId !== 'create';

  const history = useHistory();

  const [selectCategories, setSelectCategories] = useState<Category[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Category>();

  useEffect(() => {
    requestBackend({ url: '/categories'}).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/categories/${categoryId}` }).then((response) => {
        const category = response.data as Category;

        setValue('name', category.name);
      });
    }
  }, [isEditing, categoryId, setValue]);

  const onSubmit = (formData: Category) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Categoria cadastrada com sucesso');
        history.push('/admin/categories');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar categoria');
      });
  };

  const handleCancel = () => {
    history.push('/admin/categories');
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DA CATEGORIA</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('name', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome da categoria"
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
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
