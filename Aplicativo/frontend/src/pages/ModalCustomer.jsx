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
import CustomerView from "./CustomerView";

export default function ModalCustomer() {


    // const params = useParams();
    // const [modalCustomer, setModalCustomer] = useState();

    // useEffect(() => {
    //     api.get(`modalCustomer/${params.id}`).then(response => {
    //         setModalCustomer(response.data);
    //     })    

    // }, [params.id]);


    return (


        <React.Fragment>


            <div id="modal_process" className="modal_container_customer show_customer">
                <div className="modal_customer">
                    <h1 className="subtitle">Detalhes do seu cliente</h1>
                    <div className="details_customer_view">


                        <div className="details_view">
                            <div className="client">
                                <h3>Nome do cliente:</h3>
                                
                                <input className="input-music" type="text" value="Thiago Silva"/>
        
                            </div>
                            <div className="client">
                            <h3>CPF do cliente: </h3>
                            <input className="input-music" type="text" value="465.768.546-87"/>
                               
                            </div>
                           

                        </div>

                        <div className="details_view">
                            <div className="client">
                                <h3>E-mail do cliente: </h3>
                                <input className="input-music" type="text" value="thiagoSilva@gmail.com"/>
                            

                                
                            </div>
                            <div className="client">
                            <h3>Telefone do cliente:</h3>
                            <input className="input-music" type="text" value="(11) 94156-3680"/>
                                
                            </div>
                            
                        </div>


                    </div>
                    <div class="client_btn">

                        <Link to="/visualizacao-cliente" class="btn_blue_customer"> Fechar </Link>
                        <Link to="/visualizacao-cliente" class="btn_black_customer"> Excluir </Link>

                    </div>

                </div>
            </div>
            <CustomerView />
        </React.Fragment>
    )
}