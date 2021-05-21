import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/owner_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
import api from "../services/api";

let nome = "";
let dataNasc = "";
let email = "";
let senha = "";
let telefone = "";
let cpf = "";

export default function OwnerRegistration() {

    const [proprietario, setProprietario] = useState(
        {
            nivelAcesso: 3,
            cpf: "",
            dataNasc: "",
            email: "",
            nome: "",
            senha: "",
            telefone: ""
        });

    async function cadastrar() {
        try{
        const resposta = await api.post("/proprietarios", {
            ...proprietario,
        });
        if(resposta.status === 201){
            alert("Usuário cadastrado");
            window.location.href="/home-mechanic"
          }
        }catch (err){
          alert("Erro no cadastro, tente novamente");
        }
    }

    function handleInput(evento) {
        const { name, value } = evento.target;
        setProprietario({
            ...proprietario,
            [name]: value
        });

    }

    function handleInput2(evento){
        if(proprietario.senha != null){
          if(proprietario.senha != evento.target.value){
            document.getElementById("senhas-teste").innerHTML = "As senhas não combinam";
          }else{
            document.getElementById("senhas-teste").innerHTML = "";
          }
        }
      }

    return (
        <div className="container_registration">
            <div className="box_registration">
                <img className="logo_registration" src={Logo} alt="" />
                <h2 className="title_registration">CADASTRO DO PROPRIETÁRIO</h2>
                <form action="" className="form_registration">
                    <div className="inputs-form_registration">
                        <div className="inputs_top_registration">
                            <div className="inputs_left_registration">
                                <input type="text" placeholder="Nome completo" name="nome" onChange={handleInput} required="true" />
                                <input type="text" placeholder="CPF" name="cpf" onChange={handleInput} required="true" />
                            </div>
                            <div className="inputs_right_registration">
                                <input type="date" placeholder="Data de nascimento" name="dataNasc" onChange={handleInput} required="true" />
                                <input type="text" placeholder="Telefone" name="telefone" onChange={handleInput} required="true" />
                            </div>
                        </div>
                        <div className="input_email">
                            <input type="email" placeholder="Email" name="email" onChange={handleInput} required="true" />
                        </div>
                        <div className="passwords">
                            <input type="password" placeholder="Senha" name="senha" onChange={handleInput} required="true" />
                            <input type="password" placeholder="Confirmação senha" name="senha2" onChange={handleInput2} onClick={handleInput2} />
                        </div>
                        <p id="senhas-teste"></p>
                    </div>
                    <div className="owner_buttons_register">
                        <Link className="owner_link_register" to="/proprietarios/login"> <Button isBackButton={true} classNameButton="owner_btn_back_registration" >Voltar</Button> </Link>
                        <Link className="owner_link_register"> <Button classNameButton="owner_btn_regitration" onClick={cadastrar}>Cadastrar</Button> </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}