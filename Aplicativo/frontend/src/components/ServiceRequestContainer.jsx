import pencil from "../assets/img/pencil.png";
import "../assets/css/service_request.css";
import "../assets/home.css";
import "../assets/reset.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function ServiceRequestContainer() {
    return (    


                    <div className="service_request_container">

                        <div className="title_container_service">
                            <h1>Serviço 2</h1>
                        </div>

                        <div className="service_container_request">
                            <div className="name_container_service">

                                <div className="details_car">
                                    <h2>Modelo:</h2>
                                    <p className="model_car">Gol</p>
                                </div>

                                <h2>Placa:</h2>
                                <p className="license_plate_request">CAT-7989</p>
                            </div>
                        <Link to="/modal-ordem-de-servico/1"><img className="image_menu_request" src={pencil} /> </Link>
                            <div className="status">
                                <h3>Status:</h3>
                                <h4 className="progress_status">Concluído</h4>
                            </div>
                        </div>

                    </div>

              
    )
}