import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import { Link } from 'react-router-dom';

import './styles.css';
import Pagination from 'components/Pagination';

const Catalog = () => {
  const product: Product = {
    id: 1,
    name: 'Antepastos',
    description:
      'Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.',
    price: 32.5,
    imgUrl:
      'https://github.com/greicyitakura/mangiaBene/blob/main/pitII/imagens/antepasto.png?raw=true',
    date: '2022-07-13T20:50:07.123450Z',
    categories: [{ id: 1, name: 'entradas' }],
  };

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Menu</h1>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/2">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/3">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/4">
            <ProductCard product={product} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/5">
            <ProductCard product={product} />
          </Link>
        </div>
      </div>

      <div className='row'>
        <Pagination />
      </div>

    </div>
  );
};

export default Catalog;
