import React, { useEffect, useState } from "react";
import NavSystem from "../components/NavSystem";
import Button from "../components/Button";
import pencil from "../assets/img/pencil.png";
import "../assets/css/customer_view.css";
import "../assets/css/system_page.css";
import "../assets/css/style.css";
import "../assets/reset.css";
import "../assets/home.css";
import CustomerViewContainer from "../components/CustomerViewContainer";
import api from "../services/api";

export default function CustomerView() {

    const [clientes, addCliente] = useState([]);

    useEffect(() => {
        async function getClientes() {
            const resposta = await api.get("/usuarios/");
            addCliente(resposta.data);
        }
        getClientes();
    }, []);


    function changePage(){
        window.location.href="/user-registration";
    }

    return (
        <React.Fragment>
            <NavSystem />

            <div className="geral">
                <div>
                    <b>
                        <h1 className="title_client">CLIENTES</h1>
                    </b>
                </div>


                <div className="background">
                    <div className="geral_container">
                    {clientes.map((clientes) => (
                            <CustomerViewContainer
                                id={clientes.id}
                                nome={clientes.nome}
                            />
                        ))}
                    </div>


                </div>

                <div className="geral_btn">
                    <button className="btn_customer" onClick={changePage}>Adicionar um novo cliente</button>
                </div>



            </div>

           
          

        </React.Fragment>
    );
}