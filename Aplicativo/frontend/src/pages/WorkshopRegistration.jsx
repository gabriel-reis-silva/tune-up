import { Link } from "react-router-dom";
import "../assets/css/workshop_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
export default function WorkshopRegistration() {
    return (
        <div className="workshop_container_registration">
            <div className="workshop_box_registration">
                <img className="workshop_logo_registration" src={Logo} alt="" />
                <h2 className="workshop_title_registration">CADASTRO DA OFICINA</h2>
                <form action="" className="workshop_form_registration">
                    <div className="workshop_inputs-form_registration">
                        <div className="workshop_inputs_top_registration">
                            <div className="workshop_inputs_left_registration">
                                <input type="text" placeholder="Nome da oficina" />
                                <input type="text" placeholder="Razão social" />
                                <input type="text" placeholder="CEP"/>
                                <input type="text" placeholder="Rua" ></input>
                                <input type="text" placeholder="Bairro" />
                                <input type="text" placeholder="Número" ></input>
                                
                            </div>
                            <div className="workshop_inputs_right_registration">
                                <input type="text" placeholder="Complemento" />
                                <input type="text" placeholder="Telefone empresarial" />
                                <input type="text" placeholder="E-mail empresarial" />
                                <input type="text" placeholder="IE(Inscrição Estadual)" />
                            </div>

                            <div className="workshop_input_box_clock">
                         Horário de funcionamento:<input type="text" placeholder="Horário de funcionamento" />
                            </div>

                        </div>
                        
        
                    </div>
                    <div className="workshop_buttons_register">
                        <Link className="workshop_link_register" to=""> <Button classNameButton="workshop_btn_regitration" >Cadastrar serviços</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}