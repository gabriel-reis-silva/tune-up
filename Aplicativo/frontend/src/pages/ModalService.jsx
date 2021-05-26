import React, { useEffect, useState } from "react";
import NavSystem from "../components/NavSystem";
import Button from "../components/Button";
import pencil from "../assets/img/pencil.png";
import "../assets/css/customer_view.css";
import "../assets/css/system_page.css";
import "../assets/css/style.css";
import "../assets/reset.css";
import "../assets/home.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ServiceRequest from "./ServiceRequest";
import plus from "../assets/img/plus.png";


export default function ModalService() {


  {/*  const params = useParams();
    const [modalCustomer, setModalCustomer] = useState();

    useEffect(() => {
        api.get(`modalCustomer/${params.id}`).then(response => {
            setModalCustomer(response.data);
        })    

    }, [params.id]);
const mapa = {
    color: "red"
  }; */}
    return (


        <React.Fragment>



            <div id="modal_process" className="modal_service_container mostrar_service">
                <div className="modal_service">
                    <h1 className="subtitle_request">Detalhes da sua ordem de serviço</h1>
                    <div className="details_service_view">

                        <div className="details_service">
                            <div className="service">

                                <h3>Nome do cliente:</h3>
                                <input className="input-service" type="text" value="Thiago Silva"/>
                                

                            </div>

                            <div className="service">
                                <h3>CPF do cliente: </h3>
                                <input className="input-service" type="text" value="463.748.746-67"/>
                                
                            </div>
                        </div>


                        <div className="details_service">

                            <div className="service">
                                <h3>Preço do serviço: </h3>
                                <input className="input-service" type="text" value="R$:250,00"/>
                                
                            </div>

                            <div className="service">
                                <h3>Data estimada: </h3>
                                <input className="input-service" type="text" value="23.06.2021"/>
                               
                            </div>
                        </div>


                        <div className="details_service">

                            <div className="service">
                                <h3>Data de emissão: </h3>
                                <input className="input-service" type="text" value="23.06.2021"/>
                              
                            </div>

                            <div className="service">
                                <h3>Status do serviço:</h3>
                                <select name="" id="" className="status_service">
                                    <option value="">Concluído</option>
                                    <option value="">Em andamento</option>
                                    <option value="">Não iniciado</option>

                                </select>

                            </div>
                        </div>



                        <hr className="line_service" />

                        <h1 className="subtitle_service">Serviços adicionados</h1>
                        <div className="details_service">

                            <div className="services">
                            <input className="input-service" type="text" value="Personalização de Painel"/>
                               

                            </div>

                            <div className="services">
                            <input className="input-service" type="text" value="Troca de óleo do motor"/>
                                

                            </div>

                            <div className="services">
                            <input className="input-service" type="text" value="Turbo"/>
                               

                            </div>

                        </div>

                        <div className="details_service">

                            <div className="services">
                            <input className="input-service" type="text" value="Turbo"/>
                              
                            </div>

                            <div className="services">
                            <input className="input-service" type="text" value="Turbo"/>
                               
                            </div>

                            <div className="services">
                            <input className="input-service" type="text" value="Turbo"/>
                               
                            </div>

                        </div>

                        <hr className="line_service" />


                        <h1 className="subtitle_service">Veículo</h1>
                        <div className="details_service">

                            <div className="service">
                                <h3>Marca: </h3>
                                <input className="input-service" type="text" value="Volkswagen"/>
                               
                            </div>

                            <div className="service">
                                <h3>Placa do carro: </h3>
                                <input className="input-service" type="text" value="CAT-7949"/>
                                
                            </div>
                        </div>

                        <div className="details_service">

                            <div className="service">
                                <h3>Ano: </h3>
                                <input className="input-service" type="text" value="2002"/>
                           
                            </div>

                            <div className="service">
                                <h3>Cor: </h3>
                                <input className="input-service" type="text" value="Branco"/>
                              
                            </div>
                        </div>

                        <div className="details_service">

                            <div className="service">
                                <h3>Modelo: </h3>
                                <input className="input-service" type="text" value="Gol"/>
                                
                            </div>

                            <div className="service">
                                <h3>Categoria: </h3>
                                <input className="input-service" type="text" value="Sedan"/>
                                <p></p>
                            </div>
                        </div>


                    </div>

                    <hr className="line_service" />


                    <h1 className="subtitle_service">Imagens do veículo</h1>
                    <div className="photos_cars">

                        <div className="photo_container_img">
                            <div className="photo_plus">

                                {/* <input type="file" style={{width:"50%"}}></input> */}
                                <label for='selecao-arquivo' >Selecionar um arquivo 
                                {/* <input id='selecao-arquivo' style={{mapa}} type='file' ></input> */}
                                </label>
                            </div>
                        </div>

                        <div className="photo_container_img">
                            <div className="photo_plus">

                                <img src={plus} />

                            </div>
                        </div>

                        <div className="photo_container_img">
                            <div className="photo_plus">

                                <img src={plus} />

                            </div>
                        </div>

                        <div className="photo_container_img">
                            <div className="photo_plus">

                                <img src={plus} />

                            </div>
                        </div>

                        <div className="photo_container_img">
                            <div className="photo_plus">

                                <img src={plus} />

                            </div>
                        </div>


                    </div>

                    <div class="service_btn">

                        <Link to="/ordem-de-servico" class="btn_blue_service"> Fechar </Link>

                        <Link to="/ordem-de-servico" class="btn_yellow_service"> Salvar </Link>

                        <Link to="/ordem-de-servico" class="btn_black_service"> Excluir </Link>

                    </div>

                    

                </div>
            </div>
            <ServiceRequest />
        </React.Fragment>
    )
}