import { useForm } from 'react-hook-form';

type FormData = {
  address: string;
  number: string;
  complemento: string;
  delivery: string;
};

function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <h1>Endereço de entrega</h1>
        <div className="mb-4">
          <h1>Endereço:</h1>
          <input
            {...register('address', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.address ? 'is-invalid' : ''
            }`}
            placeholder="Av. Paulista"
            name="adress"
          />
        </div>
        <div className="mb-4">
          <h1>Número:</h1>
          <input
            {...register('number', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'numero inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.number ? 'is-invalid' : ''
            }`}
            placeholder="1190"
            name="number"
          />
        </div>
        <div className="mb-4">
          <h1>Complemento:</h1>
          <input
            {...register('complemento', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'numero inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.complemento ? 'is-invalid' : ''
            }`}
            placeholder="apt 157 conj 7"
            name="complemento"
          />
        </div>
        <div className="mb-4">
          <h1>Delivery de ser entregue:</h1>
          <input
            {...register('delivery', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'numero inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.delivery ? 'is-invalid' : ''
            }`}
            placeholder="na portaria / encontrar com entregador"
            name="delivery"
          />
        </div>
      </div>
    </form>
  );
}

export default AddressForm;
