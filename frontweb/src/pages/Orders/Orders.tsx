import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

function OrdersPurchage() {
  const showToastMessage = () => {
    toast.success('Pedido realizado com sucesso!!!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
       <MDBContainer
      className="py-5"   
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12" lg="10" xl="6">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Dados do Pagamento</h3>
              </div>
             
              <p className="fw-bold mb-4">Adicione o cartão:</p>
              <MDBInput
                label="Nome"
                id="form3"
                type="text"
                size="lg"
                value="Maria Silva"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Numero do cartão"
                    id="form4"
                    type="text"
                    size="lg"
                    value="1234 5678 1234 5678"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Vencimento"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <MDBContainer
      className="py-5"   
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="12" lg="10" xl="6">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Dados da Entrega</h3>
              </div>
             
              <p className="fw-bold mb-4">Adicione o Endereço:</p>
              <MDBInput
                label="Endereço"
                id="form3"
                type="text"
                size="lg"
                value="Av. Paulista, 31"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Complemento"
                    id="form4"
                    type="text"
                    size="lg"
                    value="Apto 8 / torre 2"
                  />
                </MDBCol>        
                <MDBCol size="7">
                  <MDBInput
                    label="Telefone de contato"
                    id="form4"
                    type="text"
                    size="lg"
                    value="11 92789-3986"
                  />
                </MDBCol>        
              </MDBRow>
              <div className="form-check d-flex justify-content-left mb-3">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form7Example8"
                  checked
                />
                <h6>Pagamento com PIX ou Na entrega</h6>
              </div>
              <div className="form-check d-flex justify-content-left mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form7Example8"
                  checked
                />
                <h6>Deseja encontrar com o entregador?</h6>
              </div>

              <div>
        <Button
          type="button"
          className="btn btn-success btn-lg btn-block"
          onClick={showToastMessage}
        >
          Finalizar compra
        </Button>
        <ToastContainer />
      </div>
            </MDBCardBody>

          
             
          </MDBCard>
          
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>

    
    </>
  );
}

export default OrdersPurchage;
