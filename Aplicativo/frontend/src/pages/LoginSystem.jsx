import React from "react";
import Button from "../components/Button";
import Logo from "../assets/img/Tune-Up.png";
import { Link } from "react-router-dom";
import "../assets/css/login_system.css";


let email = 'nulo';
let senha = 'nulo';
function getData(email, senha) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8080/usuarios/login/${email}/${senha}`);
    xhr.responseType = 'json';
    xhr.onload = () => {
        console.log(xhr.status);       
        if(xhr.status === 200) {
            console.log("foi");
            window.location.href="http://localhost:3000/home-system";
        }else{
            alert("E-mail ou senha incorretos!");
            console.log("não autorizado")
        }
    };
    xhr.send();
}
function pegaEmail(emailGet){
     email = emailGet.target.value;
    //  console.log(emailGet.target.value);
}
function pegaSenha(senhaGet){
    senha = senhaGet.target.value;
}
export default function LoginSystem() {
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
                    <input onChange={pegaEmail} type="email" name="email" id="email" placeholder="Digite seu E-mail" autocomplete="off" />

                    {/*Password*/}
                    <label for="password">Senha</label>
                    <input onChange={pegaSenha} type="password" name="password" id="password" placeholder="Digite a sua senha" />

                    {/*Esqueceu a senha*/}
                    <Link to="/login" id="forgot-pass">Esqueceu a senha?</Link>
                </form>
                <div className="buttons">
               <Button classNameButton="register-button" name="cadastrar" id="cadastrar">Cadastrar-se</Button> 
                 <button style={{backgroundColor: '#FFC000', color: 'white'}} onClick={() => getData (email, senha)}>Entrar</button> 
                </div>
            </div>
        </div>
    );


}
