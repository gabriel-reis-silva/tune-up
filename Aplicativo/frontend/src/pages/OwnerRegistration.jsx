import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/owner_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
import api from "../services/api";    

export default function UserRegistration() {
    
    const [proprietario, setProprietario] = useState(
        {
            nivelAcesso : 3,
            cpf : "",
            dataNasc : "",
            email : "",
            nome : "",
            senha : "",
            telefone : ""
        });
    
        async function cadastrar(){
            const resposta = await api.post("/proprietarios", {
              ...proprietario,
            });
            if(resposta.status === 201){
              alert("Proprietário cadastrado");
            }else{
              alert("erro! " + resposta.status);
            }
          }
    
        function handleInput(evento) {
    
            const { name, value } = evento.target;
            setProprietario({
              ...proprietario,
              [name]: value
            });
        
          }

    return (
        <div className="container_registration_owner">
            <div className="box_registration_owner">
                <img className="logo_registration_owner" src={Logo} alt="" />
                <h2 className="title_registration_owner">CADASTRO DO PROPRIETÁRIO</h2>
                <form action="" className="form_registration">
                    <div className="inputs-form_registration">
                        <div className="inputs_top_registration">
                            <div className="inputs_left_registration">
                                <input type="text" placeholder="Nome completo" name="nome" onChange={handleInput} required="true"/>
                                <input type="text" placeholder="CPF" name="cpf" onChange={handleInput} required="true"/>
                            </div>
                            <div className="inputs_right_registration">
                                <input type="date" placeholder="Data de nascimento" name="dataNasc" onChange={handleInput} required="true"/>
                                <input type="text" placeholder="Telefone" name="telefone" onChange={handleInput} required="true"/>
                            </div>
                        </div>
                        <div className="input_email">
                            <input type="email" placeholder="Email" name="email" onChange={handleInput} required="true"/>
                        </div>
                        <div className="passwords">
                            <input type="password" placeholder="Senha" name="senha" onChange={handleInput} required="true"/>
                            <input type="password" placeholder="Confirmação senha" />
                        </div>
                        <div className="input-terms_registration">
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms">Li e concordo com os termos de serviço</label>
                        </div>
                    </div>
                    <div className="buttons_register">
                        <Link className="link_register" to=""> <Button isBackButton={true} classNameButton="btn_back_registration" >Voltar</Button> </Link>
                         <button className="btn_regitration" type="button" onClick={cadastrar}>Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}