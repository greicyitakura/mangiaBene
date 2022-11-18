import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { requestBackend } from 'util/requests';
import BaseForm from '../BaseForm';
import './styles.scss';

export type FormUserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: String;
  isAdmin: boolean;
  roles: [];
}


type ParamsType = {
  userId: string;
}

const FormUser = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormUserState>();
    const history = useHistory();
    const { userId } = useParams<ParamsType>();
    const [isPasswordEquals, setIsPasswordEquals] = useState(true);

  const isEditing = userId !== 'create';
  const formTitle = isEditing ? 'EDITAR UM USUÁRIO' : 'CADASTRAR UM USUÁRIO';

  useEffect(() => {
    if (isEditing) {
        requestBackend({ url: `/users/${userId}` })
        .then(response => {
          setValue('firstName', response.data.firstName);
          setValue('email', response.data.email);
        })
    }

  }, [userId, isEditing, setValue])


  const onSubmit = (data: FormUserState) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,

      roles:
        data.isAdmin ?
          (
            [{
              "id": 1
            },
            {
              "id": 2
            }]
          )
          :
          (
            [{
              "id": 1
            }]
          )
    }

    if (data.password === data.repeatPassword) {
      setIsPasswordEquals(true);
      console.log(payload);

      requestBackend({
        url: isEditing ? `/users/${userId}` : '/users',
        method: isEditing ? 'PUT' : 'POST',
        data: payload
      })
        .then(() => {
          toast.info('Usuário salvo com sucesso!')
          history.push('/admin/users');
        })
        .catch((error) => {
          console.log(error);

          toast.error('Erro ao salvar Usuário!')
        })
    }
    else
      setIsPasswordEquals(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm
        title={formTitle}
      >

        <div className="name">
          <div className="first-name">
            <input
              {...register('firstName', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className={`form-control base-input ${
                errors.firstName ? 'is-invalid' : ''
              }`}
              placeholder="Nome do usuario"
              name="name"
            />
            <div className="invalid-feedback d-block">
              {errors.firstName?.message}
            </div>
          </div>
        </div>

        <div className="email">
          <input
            {...register('email', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className={`form-control base-input ${
                errors.email ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="email"
            />
            <div className="invalid-feedback d-block">
              {errors.email?.message}
            </div>
        </div>

        <div className="pass">
          <div className="password">
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className={`form-control base-input ${
                errors.password ? 'is-invalid' : ''
              }`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>

          <div className="repeat-password">
            <input
             {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="text"
              className={`form-control base-input ${
                errors.password ? 'is-invalid' : ''
              }`}
              placeholder="Repita a senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>

        </div>

        <span className="span-password">
          A sua senha deve ter pelo menos 8 caracteres e conter pelo menos uma número
        </span>

        <input
          type="checkbox"
          name="isAdmin"
        /> Perfil Administrador
      </BaseForm>
    </form >

  );

}
export default FormUser;