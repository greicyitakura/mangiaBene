import ProductCrudCard from "components/ProductCrudCard";

const List = () => {

const product = {

        "id": 1,
        "name": "Antepastos",
        "description": "Porções de sardella, berinjela, caponata, abobrinha e pasta da casa companhados de pao caseiro italiano.",
        "price": 32.5,
        "imgUrl": "https://raw.githubusercontent.com/greicyitakura/mangiaBene/main/pitII/imagens/antepasto.png?raw=true",
        "date": "2022-07-13T20:50:07.123450Z",
        "categories": [
            {
                "id": 1,
                "name": "Entradas"
            }
        ]
}

    return (
        <div>
            <button className="btn btn-success">Adicionar</button>
            <div>Search Bar</div>

            <ProductCrudCard product={product}/>

            <ProductCrudCard product={product}/>

            <ProductCrudCard product={product}/>

            <ProductCrudCard product={product}/>
        </div>
    )
  }
  
  export default List;