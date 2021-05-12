import { Link } from "react-router-dom";
import "../assets/css/user_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
export default function UserRegistration() {
    return (
        <div className="container_registration">
            <div className="box_registration">
                <img className="logo_registration" src={Logo} alt="" />
                <h2 className="title_registration">Cadastre-se</h2>
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
                        <div className="passwords">
                            <input type="password" placeholder="Senha" />
                            <input type="password" placeholder="Confirmação senha" />
                        </div>
                        <div className="input-terms_registration">
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms">Li e concordo com os termos de serviço</label>
                        </div>
                    </div>
                    <div className="buttons_register">
                        <Link className="link_register" to=""> <Button isBackButton={true} classNameButton="btn_back_registration" >Voltar</Button> </Link>
                        <Link className="link_register" to=""> <Button classNameButton="btn_regitration" >Cadastrar</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}