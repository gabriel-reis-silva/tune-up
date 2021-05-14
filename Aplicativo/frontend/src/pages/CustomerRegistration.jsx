import { Link } from "react-router-dom";
import "../assets/css/customer_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
export default function UserRegistration() {
    return (
        <div className="container_registration">
            <div className="box_registration">
                <img className="logo_registration" src={Logo} alt="" />
                <h2 className="title_registration">CADASTRO DO CLIENTE</h2>
                <form action="" className="form_registration">
                    <div className="inputs-form_registration">
                        <div className="inputs_top_registration">

                            <div className="inputs_left_registration">
                                <input type="text" placeholder="Nome completo" />
                                <input type="text" placeholder="CPF" />
                            </div>

                            <div className="inputs_right_registration">
                                <input type="date" placeholder="Data de nascimento" />
                                <input type="text" placeholder="Telefone" />
                            </div>
                        </div>
                        <div className="input_email">
                            <input type="text" placeholder="Email" />
                        </div>
                       
                        
                    </div>
                    <div className="buttons_register">
                        <Link className="link_register" to=""> <Button isBackButton={true} classNameButton="btn_back_registration" >Cancelar</Button> </Link>
                        <Link className="link_register" to=""> <Button classNameButton="btn_regitration" >Cadastrar</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}