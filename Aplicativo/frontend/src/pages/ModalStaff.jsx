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
import StaffVisualization from "./StaffVisualization";

export default function ModalStaff() {

    
    // const params = useParams();
    // const [modalCustomer, setModalCustomer] = useState();
    
    // useEffect(() => {
    //     api.get(`modalCustomer/${params.id}`).then(response => {
    //         setModalCustomer(response.data);
    //     })    
        
    // }, [params.id]);


    return (
        
        
        <React.Fragment>
        


<div id="modal_process" className="modal_container mostrar">
                <div className="modal">
                    <h1 className="subtitle">Detalhes do seu funcionário</h1>
                    <div className="details_staff_view">

                        <div className="details_staff">
                        <div className="staff">

                            <h3>Nome do funcionário:</h3>
                            <input className="input-staff" type="text" value="Damião Silva"/>
                        </div>

                        <div className="staff">
                            <h3>Nascimento:</h3>
                            <input className="input-staff" type="text" value="21/02/1976"/>
                           
                            </div>
                        </div>


                      <div className="details_staff">

                      <div className="staff">
                            <h3>Cargo do funcionário: </h3>
                            <input className="input-staff" type="text" value="Gerente"/>
                        
                        </div>

                      <div className="staff">
                            <h3>CPF do funcionário: </h3>
                            <input className="input-staff" type="text" value="463.748.746-67"/>
                         
                        </div>
                      </div>


                        <div className="details_staff">

                        <div className="staff">
                            <h3>E-mail do funcionário: </h3>
                            <input className="input-staff" type="text" value="damiaoSilva@gmail.com"/>
                        
                        </div>

                        <div className="staff">
                            <h3>Telefone do funcionário:</h3>
                            <input className="input-staff" type="text" value="(11) 94156-3680"/>
                            </div>
                        </div>
                        

                    </div>
                    <div class="staff_btn">
    
              <Link to="/visualizacao-funcionario" class="btn_yellow_staff"> Fechar </Link>
              <Link to="/visualizacao-funcionario" class="btn_black_staff"> Excluir </Link>
    
            </div>

                </div>
            </div>
        <StaffVisualization />
        </React.Fragment>
    )
}