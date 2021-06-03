import pencil from "../assets/img/pencil.png";
import "../assets/css/service_request.css";
import "../assets/home.css";
import "../assets/reset.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import api from "../services/api";
import { useState, useEffect } from "react";


export default function ServiceRequestContainer({ id, status, fkVeiculo, ...props }) {

    const [veiculo, addVeiculosList] = useState([]);
    
    useEffect(() => {
        async function getVeiculos() {
            const resposta = await api.get(`/veiculos/${fkVeiculo}`);
            addVeiculosList(resposta.data);
            console.log(addVeiculosList);
            
        }
        getVeiculos();
        
       
               
    }, []);

 

const fk = veiculo.fkCliente;

   
    return (    


                    <div id="id_background" className="service_request_container">

                        <div className="title_container_service">
                            <h1>Serviço {id}</h1>
                        </div>

                        <div className="service_container_request">
                            <div className="name_container_service">

                                <div className="details_car">
                                <div>
                                    <h2>Modelo:</h2>
                                    <p className="model_car">{veiculo.modelo}</p>
                                </div>
                                <Link to={`/modal-ordem-de-servico/${id}/${fk}/${fkVeiculo}`}><img className="image_menu_request" src={pencil} /> </Link>
                                </div>

                                <div className="details_plate">

                                <h2>Placa:</h2>
                                <p className="license_plate_request">{veiculo.placa}</p>

                                </div>


                               
                            </div>
                       
                            <div className="status">
                                <h3>Status:</h3>
                                <h4 className="progress_status">{status}</h4>
                            </div>
                        </div>

                    </div>

              
    )
}