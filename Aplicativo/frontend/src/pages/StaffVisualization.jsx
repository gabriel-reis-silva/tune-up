import React, { useEffect } from "react";
import NavSystem from "../components/NavSystem";
import pencil from "../assets/img/pencil.png";
import "../assets/css/staff_visualization.css";
// import "../assets/css/style.css";
// import "../assets/reset.css";
import StaffVisualizationContainer from "../components/StaffVisualizationContainer";

export default function StaffVisualization() {

    // const[services, addServicesList] = useState([]);

    // useEffect(() => {
    //     async function getServices() {
    //         const answer = await api.getServices("/");
    //         addServicesList(answer.data);
    //     }
        
    //     getServices();
    // })

    function changePage(){
        window.location.href="/employee-registration";
    }
    return (
        <React.Fragment>
            <NavSystem />

            <div className="geral">
                <div>
                    <b>
                        <h1 className="title_staff">FUNCIONÁRIOS</h1>
                    </b>
                </div>
                

                <div className="background_staff">
                <div className="geral_container_staff">
                <StaffVisualizationContainer />
                <StaffVisualizationContainer />
                <StaffVisualizationContainer />
                </div>    
               

                </div>

                <div className="geral_btn_staff">
                <button className="btn_staff" onClick={changePage}>Adicionar um novo funcionário</button>
                </div>

                
            
            </div>

        </React.Fragment>
    );
}