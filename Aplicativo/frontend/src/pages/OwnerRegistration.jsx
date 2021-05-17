import { Link } from "react-router-dom";
import "../assets/css/owner_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
export default function OwnerRegistration() {
    return (
        <div className="owner_container_registration">
            <div className="owner_box_registration">
                <img className="owner_logo_registration" src={Logo} alt="" />
                <h2 className="owner_title_registration">CADASTRO DO PROPRIETÁRIO</h2>
                <form action="" className="owner_form_registration">
                    <div className="owner_inputs-form_registration">
                        <div className="owner_inputs_top_registration">
                            <div className="owner_inputs_left_registration">
                                <input type="text" placeholder="Nome completo" />
                                <input type="text" placeholder="CPF" />
                            </div>
                            <div className="owner_inputs_right_registration">
                                <input type="date" placeholder="Data de nascimento" />
                                <input type="text" placeholder="Telefone" />
                            </div>
                        </div>
                        <div className="owner_input_email">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="owner_passwords">
                            <input type="password" placeholder="Senha" />
                            <input type="password" placeholder="Confirmação senha" />
                        </div>
        
                    </div>
                    <div className="owner_buttons_register">
                        <Link className="owner_link_register" to=""> <Button isBackButton={true} classNameButton="owner_btn_back_registration" >Voltar</Button> </Link>
                        <Link className="owner_link_register" to=""> <Button classNameButton="owner_btn_regitration" >Cadastrar</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}