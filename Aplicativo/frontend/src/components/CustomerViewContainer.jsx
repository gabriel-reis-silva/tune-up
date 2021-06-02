import pencil from "../assets/img/pencil.png";
import "../assets/css/customer_view.css";
import "../assets/home.css";
import "../assets/reset.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function CustomerViewContainer({id, nome, ...props}) {
    const [veiculo, addVeiculosList] = useState([]);

    useEffect(() => {
        async function getVeiculos() {
            const resposta = await api.get(`/veiculos/fk/${id}`);
            addVeiculosList(resposta.data);
        }
        getVeiculos();
    }, []);
    return (    


                    <div className="customer_container_view">

                        <div className="title_container_customer">
                            <h1>Cliente {id}</h1>
                        </div>

                        <div className="customer_container">
                            <div className="name_container_customer">

                                    <h2>{nome}</h2>                  
                            </div>
                            
                           <Link to={`/modal-cliente/${id}`}> <img className="image_menu_customer" src={pencil} /> </Link> 
                        
                            <div className="license_plate_customer">
                                    <h2>Placa:</h2>
                                <p >{veiculo.placa}</p>
                                    </div>  
                        </div>

                    </div>

                    

              
    )
}