import { Link } from "react-router-dom";
import "../assets/css/workshop_registration.css";
import Logo from "../assets/img/Tune-Up.png";
import Button from "../components/Button";
import React from "react";
// import InputMask from "react-input-mask";

export default function WorkshopRegistration() {
    return (
    
        <div className="workshop_container_registration">
            <div className="workshop_box_registration">
                <img className="workshop_logo_registration" src={Logo} alt="" />
                <h2 className="workshop_title_registration">CADASTRO DA OFICINA</h2>


                <form action="">
                        <div className="group-work">
                            <input type="name" name="name" id="name" placeholder="Nome da oficina"
                                autocomplete="off" />
                        </div>

                        <div className="group-work">
                            <input type="name" id="date" name="date" placeholder="Razão social" />
                        </div>

                        <div className="group-work">
                            <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ" /> 
                        </div>

                        <div className="group-work">
                            <input type="name" name="rua" id="rua" placeholder="Rua"
                                autocomplete="off" />
                        </div>

                        <div className="group-work">
                            <input type="cep" name="cep" id="cep" placeholder="CEP" />
                        </div>

                        <div className="group-work">
                            <input type="bairro" name="bairro" id="bairro" placeholder="Bairro"
                                autocomplete="off" />
                        </div>

                        <div className="group-work">
                            <input type="numero" name="numero" id="numero" placeholder="Número" />
                        </div>

                        <div className="group-work">
                            <input type="numero" name="complemento" id="complemento"
                                placeholder="Complemento" />
                        </div>

                        <div className="group-work">
                            <input type="numero" name="tel" id="tel"
                                placeholder="Telefone empresarial" />
                        
                        </div>
                        <div className="group-work">
                            <input type="email" name="email" id="email"
                                placeholder="E-mail empresarial" />
                        </div>
                        <div className="group-work">
                            <input type="text" name="text" id="text"
                                placeholder="IE(Inscrição Estadual)" />
                        </div>
                    </form>
                    
                    <div className="group-workshop">
                        <label for="horario">Horário de funcionamento:</label>
                            <textarea type="horario" name="horario" id="horario"
                                placeholder="Ex: De segunda a sexta das 08:00 até as 19:00
                                De domingo das 09:00 até as 16:00
                                De Feriados das 10:00 até ás 15:00" />
                        </div>
                    <div className="buttons_work">
                        <button name="next" id="nextPage" className="next-page">Cadastrar Funcionário</button>
                    </div>
                </div>
                
            </div>
            
    
    );
}