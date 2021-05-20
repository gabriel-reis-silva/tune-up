import { Link } from "react-router-dom";
import "../assets/css/customer_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
export default function CustomerRegistration() {
    return (
        <div className="customer_container_registration">
            <div className="customer_box_registration">
                <img className="customer_logo_registration" src={Logo} alt="" />
                <h2 className="customer_title_registration">CADASTRO DO CLIENTE</h2>
                <form action="" className="customer_form_registration">
                    <div className="customer_inputs-form_registration">
                        <div className="customer_inputs_top_registration">

                            <div className="customer_inputs_left_registration">
                                <input type="text" placeholder="Nome completo" />
                                <input type="text" placeholder="CPF" />
                            </div>

                            <div className="customer_inputs_right_registration">
                                <input type="date" placeholder="Data de nascimento" />
                                <input type="text" placeholder="Telefone" />
                            </div>
                        </div>
                        <div className="customer_input_email">
                            <input type="text" placeholder="Email" />
                        </div>
                       
                        
                    </div>
                    <div className="customer_buttons_register">
                        <Link className="customer_link_register" to=""> <Button isBackButton={true} classNameButton="btn_back_registration" >Cancelar</Button> </Link>
                        <Link className="customer_link_register" to=""> <Button classNameButton="btn_regitration" >Cadastrar</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}