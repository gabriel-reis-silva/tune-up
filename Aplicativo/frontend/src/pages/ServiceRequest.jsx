import React, { useEffect } from "react";
import NavSystem from "../components/NavSystem";
import Button from "../components/Button";
import pencil from "../assets/img/pencil.png";
import "../assets/css/service_request.css";
import "../assets/css/system_page.css";
import "../assets/css/style.css";
import "../assets/reset.css";
import "../assets/home.css";
import ServiceRequestContainer from "../components/ServiceRequestContainer";

export default function ServiceRequest() {

    // const[services, addServicesList] = useState([]);

    // useEffect(() => {
    //     async function getServices() {
    //         const answer = await api.getServices("/");
    //         addServicesList(answer.data);
    //     }
        
    //     getServices();
    // })


    return (
        <React.Fragment>
            <NavSystem />

            <div className="geral_service">
                <div>
                    <b>
                        <h1 className="title_service">ORDEM DE SERVIÇO</h1>
                    </b>
                </div>
                

                <div className="background_service">
                <div className="geral_container_service">
                <ServiceRequestContainer />
                <ServiceRequestContainer />
                <ServiceRequestContainer />
                </div>    
               

                </div>

                <div className="geral_btn">
                <button className="btn_service">Adicionar um novo serviço</button>
                </div>

                
            
            </div>

        </React.Fragment>
    );
}