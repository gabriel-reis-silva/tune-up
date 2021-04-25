import React from "react";
import Button from "../components/Button";
import Logo from "../assets/img/Tune-Up.png";
import { Link } from "react-router-dom";
import "../assets/css/login_system.css";

export default function LoginSystem() {
        return (
            <div id="body-login">
                <div id="login-container">
                    <div className="container-back-login">
                        <Link to="/home-mechanic" className="back-login">Voltar</Link>
                    </div>
                    <div className="img-back">
                        <img src={Logo} alt=""/>
                    </div>
                    {/*Login*/}
                    <form action="">
                        {/*E-mail*/}
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu E-mail" autocomplete="off"/>

                        {/*Password*/}
                        <label for="password">Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite a sua senha"/>

                        {/*Esqueceu a senha*/}
                        <Link to="/login" id="forgot-pass">Esqueceu a senha?</Link>
                    </form>
                    <div className="buttons">
                        <Button classNameButton="register-button"  name="cadastrar" id="cadastrar">Cadastrar-se</Button>
                        <Button classNameButton="login-button" colorButton="#FFC000">Entrar</Button>
                    </div>
                </div>
            </div>
        );
} 
