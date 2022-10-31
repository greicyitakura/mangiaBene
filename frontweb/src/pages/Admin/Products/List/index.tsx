import { Link } from 'react-router-dom';
import ProductCrudCard from '../ProductCrudCard';
import './styles.css';

const List = () => {
  const product = {
    id: 1,
    name: 'Antepastos',
    description:
      'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.',
    price: 32.5,
    imgUrl:
      'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
    date: '2022-07-13T20:50:07.123450Z',
    categories: [
      {
        id: 1,
        name: 'Entradas',
      },
    ],
  };

  return (
    <>
      <div className="product-crud-container">
        <div className="product-crud-bar-container">
          <Link to="/admin/products/create">
            <button className="btn btn-success text-white btn-crud-add">
              Adicionar
            </button>
          </Link>
          <div className="base-card product-filter-container">Search bar</div>
        </div>
        <div className="row">
        <div key={product.id} className="col-sm-6 col-md-12">
        <ProductCrudCard
          product={{
            imageURI:
              'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
            id: 1,
            name: 'Antepastos',
            description:
              'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.',
            price: 32.5,
            imgUrl:
              'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
            date: '2022-07-13T20:50:07.123450Z',
            categories: [{
              id: 1,
              name: 'Entradas',
            },],
          }}
        />
         </div>
         <div key={product.id} className="col-sm-6 col-md-12">
        <ProductCrudCard
          product={{
            imageURI:
              'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
            id: 1,
            name: 'Antepastos',
            description:
              'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.',
            price: 32.5,
            imgUrl:
              'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
            date: '2022-07-13T20:50:07.123450Z',
            categories: [],
          }}
        />
         </div>
         <div key={product.id} className="col-sm-6 col-md-12">
        <ProductCrudCard
          product={{
            imageURI:
              'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
            id: 1,
            name: 'Antepastos',
            description:
              'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.',
            price: 32.5,
            imgUrl:
              'https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true',
            date: '2022-07-13T20:50:07.123450Z',
            categories: [],
          }}
        />
         </div>
         </div>
      </div>
    </>
  );
};

export default List;
