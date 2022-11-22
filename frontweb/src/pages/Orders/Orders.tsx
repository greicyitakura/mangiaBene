
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { Orders } from "types/orders";


  function OrdersPurchage() {
    
    const showToastMessage = () => {
      toast.success('Pedido realizado com sucesso!!!', {
          position: toast.POSITION.TOP_RIGHT
      });
  };
      return (
      
<div className="row">
  <div className="col-md-8 mb-4">
    <div className="card mb-4">
      <div className="card-header py-3">
        <h5 className="mb-">Dados da entrega</h5>
      </div>
      <div className="card-body">
        <form>

        <div className="form-outline mb-4">
            <input type="text" id="form7Example3" className="form-control" />
            <label className="form-label" >Nome completo</label>
          </div>
          
          <div className="form-outline mb-4">
            <input type="text" id="form7Example4" className="form-control" />
            <label className="form-label" >Endereço</label>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form7Example1" className="form-control" />
                <label className="form-label" >Apartamento/Complemento</label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form7Example2" className="form-control" />
                <label className="form-label" >Torre/Bloco</label>
              </div>
            </div>
          </div>
         
          <div className="form-outline mb-4">
            <input type="number" id="form7Example6" className
            ="form-control" />
            <label className="form-label">Telefone de contato</label>
          </div>
          <h5>Pagamento somente com PIX ou na entrega <br/></h5>

          
    <br />
    <br />

          <div className="form-check d-flex justify-content-center mb-2">
            <input className="form-check-input me-2" type="checkbox" value="" id="form7Example8" checked />
<h6>Deseja encontrar com o entregador?</h6>
          </div>
        </form>
      </div>
    </div>
  </div>

<div>
        <Button type="button" className="btn btn-success btn-lg btn-block" onClick={showToastMessage}>
          Finalizar compra
        </Button>
        <ToastContainer />
        </div>
      </div>
  
      );
    };
    
    export default OrdersPurchage;
    