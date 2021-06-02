import React from "react"
import NavSystem from '../components/NavSystem';
import "../assets/css/order_of_service.css";
import ImageSavingBD from "../components/SavingImageBD";
import "antd/dist/antd.css";


export default function ServiceOrder() {
    return (
        <React.Fragment>
        <NavSystem />

        <div className="container-orderService">
            <div id="register-order">
                <h1 className="title-order-service">Adicionando uma nova ordem de serviço</h1>
                <h2 className="title-order-service-min">Dados do Cliente</h2>
                <form action="">
                    <div className="group-order">
                        <label for="clientName">Nome do Cliente</label>
                        <input type="text" name="clientname" id="clientName" className="clientName"
                            placeholder="César Augusto Babosa" />
                    </div>

                    <div className="group-order">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf" placeholder="555.555.555-55" />
                    </div>

                    <div className="group-order">
                        <label for="dtEmissao">Data de Emissão</label>
                        <input type="date" name="dtemissao" id="dtEmissao" />
                    </div>

                    <div className="group-order">
                        <label for="dtEstimada">Data Estimada</label>
                        <input type="date" name="drestimada" id="dtEstimada" />
                    </div>

                    <div className="group-order">
                        <label for="precoService">Preço</label>
                        <input type="text" name="preco" id="precoServico" placeholder="R$ " />
                    </div>

                    <div className="group-order">
                        <label for="statusService">Status de Serviço</label>
                        <select name="status" id="statusService">
                            <option value="">Selecione o Status</option>
                            <option value="0">- Não Iniciado</option>
                            <option value="1">- Em Andamento</option>
                            <option value="2">- Concluído</option>
                        </select>
                    </div>
                </form>

                <hr width="noshade" className="bottomHrClient" />

                <div className="adding-service-in-order">
                    <h2 className="title-order-service-min">Serviços</h2>

                    <div className="add-service">
                        <label for="">Pesquisa de Serviço</label><input type="text" id="searchService"
                            placeholder="Ex: Troca de pneus..." className="addService-order" />
                        <button className="buttonSearch" id="searchService">Pesquisar</button>
                    </div>
                    <div className="container-serviceAdd">
                        <h3 className="addService-order">Adicione Serviços a Essa Ordem</h3>
                    </div>
                </div>

                <hr width="noshade" className="tophr" />
                <div id="services-adding">

                </div>
                <hr width="noshade" className="bottomhr" />

                <div className="adding-car-in-order">
                    <h2 className="title-order-service-min">Veículo</h2>
                    <form action="">
                        <div className="group-order">
                            <label for="brandCar">Marca</label>
                            <input type="text" name="brandCar" id="brandCar" placeholder="BMW" />
                        </div>

                        <div className="group-order">
                            <label for="modelCar">Modelo</label>
                            <input type="text" name="modelCar" id="modelCar" placeholder="X6 M Sport" />
                        </div>

                        <div className="group-order">
                            <label for="yearCar">Ano</label>
                            <input type="text" name="yearCar" id="yearCar" placeholder="2018" />
                        </div>

                        <div className="group-order">
                            <label for="colorCar">Cor</label>
                            <input type="text" name="colorCar" id="colorCar" placeholder="Vantta Black" />
                        </div>

                        <div className="group-order">
                            <label for="categoryCar">Categoria</label>
                            <input type="text" name="categoryCar" id="categoryCar" placeholder="SUV Coupe" />
                        </div>

                        <div className="group-order">
                            <label for="identifierCar">Placa</label>
                            <input type="text" name="identifierCar" id="identifierCar" placeholder="GI87AT4" />
                        </div>
                    </form>
                </div>

                <hr width="noshade" className="tophr" />

                {/*<div className="adding-car-in-order">
                    <h2 className="title-order-service-min">Imagens do Veículo</h2>
                    <ImageSavingBD />
                </div>*/}

                <div className="buttons-order">
                    <button name="cancel" id="cancelOrder" className="cancel-order">Cancelar Serviço</button>
                    <button name="adding" id="addOrder" className="add-order">Adicionar Serviço</button>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}