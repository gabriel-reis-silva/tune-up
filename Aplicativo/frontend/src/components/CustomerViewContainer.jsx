import pencil from "../assets/img/pencil.png";
import "../assets/css/customer_view.css";
import "../assets/home.css";
import "../assets/reset.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function CustomerViewContainer() {
    return (    


                    <div className="customer_container_view">

                        <div className="title_container_customer">
                            <h1>Cliente 1</h1>
                        </div>

                        <div className="customer_container">
                            <div className="name_container_customer">

                                    <h2>Thiago Silva</h2>                  
                            </div>
                            
                           <Link to="/modal-cliente/1"> <img className="image_menu_customer" src={pencil} /> </Link> 
                        
                            <div className="license_plate_customer">
                                    <h2>Placa:</h2>
                                <p >CAT-7989</p>
                                    </div>  
                        </div>

                    </div>

                    

              
    )
}