import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';

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
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
