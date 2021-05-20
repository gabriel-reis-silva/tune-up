import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/user_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
import api from "../services/api";    

export default function UserRegistration() {

    const [usuario, setUsuario] = useState(
        {
                cpf : "",
                dataNasc : "",
                email : "",
                nome : "",
                senha : "",
                telefone : ""
        });
    
        async function cadastrar(){
            const resposta = await api.post("/usuarios", {
              ...usuario,
            });
            if(resposta.status === 201){
              alert("Usuário cadastrado");
            }else{
              alert("erro! " + resposta.status);
            }
          }
    
        function handleInput(evento) {
    
            const { name, value } = evento.target;
            setUsuario({
              ...usuario,
              [name]: value
            });
        
          }
    

    return (
        <div className="container_registration">
            <div className="box_registration">
                <img className="logo_registration" src={Logo} alt="" />
                <h2 className="title_registration">Cadastre-se</h2>
                <form action="" className="form_registration">
                    <div className="inputs_left_registration">
                        <input type="text" placeholder="Nome completo" name="nome" onChange={handleInput} />
                        <input type="date" name="dataNasc" onChange={handleInput} />
                        <input type="text" placeholder="CPF" name="cpf"onChange={handleInput} />
                        <input type="text" placeholder="Telefone" name="telefone" onChange={handleInput} />
                    </div>
                    <div className="inputs_right_registration">
                        <input type="email" placeholder="Email" name="email" onChange={handleInput} />
                        <input type="password" placeholder="Senha" name="senha" onChange={handleInput} />
                        <input type="password" placeholder="Confirmação senha"  />{/* espaço reservado para que você faça a validação do campo*/}
                      <button onClick={cadastrar} type="button" className="btn_registration">Cadastrar</ button> 
                    </div>

                </form>
            </div>
        </div>
    );
}