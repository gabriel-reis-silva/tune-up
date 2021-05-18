import pencil from "../assets/img/pencil.png";
import "../assets/css/staff_visualization.css";
// import "../assets/reset.css";
// import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function StaffVisualizationContainer() {
    return (    


                    <div className="staff_container">

                        <div className="title_container_staff">
                            <h1>Funcionário 1</h1>
                        </div>

                        <div className="staff_container_visualization">
                            <div className="name_container_staff">

                                    <h2>Damião Antônio</h2>                  
                            </div>
                            
                           <Link to="/modal-funcionario/1"> <img className="image_menu_staff" src={pencil} /> </Link>
                        
                            <div className="access_level_staff">
                                    <h2>Nível de acesso:</h2>
                                <p>Gerente</p>
                                    </div>  
                        </div>

                    </div>

              
    )
}