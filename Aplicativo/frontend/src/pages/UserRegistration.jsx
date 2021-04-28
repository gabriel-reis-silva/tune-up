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
                    <div className="inputs_left_registration">
                        <input type="text" placeholder="Nome completo" />
                        <input type="date" placeholder="Nome completo" />
                        <input type="text" placeholder="CPF" />
                        <input type="text" placeholder="Telefone" />
                    </div>
                    <div className="inputs_right_registration">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Senha" />
                        <input type="text" placeholder="Confirmação senha" />
                     <Link to=""> <Button classNameButton="btn_regitration" >Cadastrar</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}