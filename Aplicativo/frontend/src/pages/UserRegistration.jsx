import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/user_registration.css";
import Logo from "../assets/img/Tune-Up.png";
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
          try {
            const resposta = await api.post("/usuarios", {
              ...usuario,
            });
            if(resposta.status === 201){
              alert("Usuário cadastrado");
              window.location.href="/home-user"
            }
          }catch (err){
            alert("Erro no cadastro, tente novamente");
          }
          }
    
        function handleInput(evento) {
    
            const { name, value } = evento.target;
            setUsuario({
              ...usuario,
              [name]: value
            });
        
          }

          function handleInput2(evento){
            if(usuario.senha != null){
              if(usuario.senha != evento.target.value){
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
                <h2 className="title_registration">Cadastre-se</h2>
                <form action="" className="form_registration">
                    <div className="inputs-form_registration">
                        <div className="inputs_top_registration">
                           <div className="inputs_left_registration">
                        <input type="text" placeholder="Nome completo" name="nome" onChange={handleInput} />
                        <input type="text" placeholder="CPF" name="cpf"onChange={handleInput} />
                    </div>
                    <div className="inputs_right_registration">
                    <input type="date" name="dataNasc" onChange={handleInput} />
                    <input type="text" placeholder="Telefone" name="telefone" onChange={handleInput} />
                    </div>
                        </div>
                        <div className="input_email">
                          <input type="email" placeholder="Email" name="email" onChange={handleInput} />
                        </div>
                        <div className="passwords">
                          <input type="password" placeholder="Senha" name="senha" onChange={handleInput} />
                          <input type="password" placeholder="Confirmação senha" name="senha2" onChange={handleInput2} onClick={handleInput2} />{/* espaço reservado para que você faça a validação do campo*/}
                        </div>
                        <p id="senhas-teste"></p>
                    <div className="buttons_register">
                    <Link to="/usuarios/login"><button type="button" className="btn_cancel_registration">Cancelar</ button></Link>
                      <button onClick={cadastrar} type="button" className="btn_registration">Cadastrar</ button> 
                    </div>
                  </div>
                </form>
            </div>
        </div>
    );
}