import React, { useState } from "react";
import Button from "../components/Button";
import Logo from "../assets/img/Tune-Up.png";
import { Link } from "react-router-dom";
import "../assets/css/login_system.css";
import api from "../services/api";


export default function LoginSystem() {
    const [usuario, setUsuario] = useState(
        {
            email: "",
            senha: "",
        });
    
        async function logar(){
            const resposta = await api.post("/usuarios/login", {
              ...usuario,
            });
            if(resposta.status === 200){
              alert("Usuário Logado!");
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
        <div id="body-login">
            <div id="login-container">
                <div className="container-back-login">
                    <Link to="/home-mechanic" className="back-login">Voltar</Link>
                </div>
                <div className="img-back">
                    <img src={Logo} alt="" />
                </div>
                {/*Login*/}
                <form action="">
                    {/*E-mail*/}
                    <label for="email">E-mail</label>
                    <input onChange={handleInput} type="email" name="email" id="email" placeholder="Digite seu E-mail" autocomplete="off" />

                    {/*Password*/}
                    <label for="senha">Senha</label>
                    <input onChange={handleInput} type="password" name="senha" id="senha" placeholder="Digite a sua senha" />

                    {/*Esqueceu a senha*/}
                    <Link to="/login" id="forgot-pass">Esqueceu a senha?</Link>
                </form>
                <div className="buttons">
                    <Button classNameButton="register-button" name="cadastrar" id="cadastrar"><Link to="/user-registration" style={{color: 'white'}}>Cadastrar-se</Link></Button>
                    <button style={{backgroundColor: '#FFC000', color: 'white'}} onClick={logar}>Entrar</button>
                </div>
            </div>
        </div>
    );


}
