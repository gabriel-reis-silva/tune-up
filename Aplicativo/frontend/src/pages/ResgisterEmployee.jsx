import { Link } from "react-router-dom";
import "../assets/css/register_employee.css";
import lgoTuneUp from "../assets/img/Tune-Up.png";
import backImage from "../assets/img/fundo-login.jpeg"

export default function UserRegistration() {
    return (
        <div className="main-banner">
            <img src={backImage} className="imgfundo-employee" alt="" />

            <div className="container-employee">
                <div id="owner-register-container">
                    <div className="img-back">
                        <img src={lgoTuneUp} alt="" className="lgo-employee" />
                        <h1>Cadastro de funcionário</h1>
                    </div>

                    <form action="">
                        <div className="group-employee">
                            <label for="completeName">Nome</label>
                            <input type="name" name="name" id="name" placeholder="Digite seu nome completo"
                                autocomplete="off" />
                        </div>

                        <div className="group-employee">
                            <label for="dtBirth ">Data de Nascimento</label>
                            <input type="date" id="date" name="date" placeholder="00/00/0000" />
                        </div>

                        <div className="group-employee">
                            <label for="cpf">CPF</label>
                            <input type="text" name="cpf" id="cpf" placeholder="555.555.555-55" />
                        </div>

                        <div className="group-employee">
                            <label for="phone">Telefone</label>
                            <input type="tel" name="phone" id="phone" placeholder="11 55555-5555" />
                        </div>

                        <div className="group-employee">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu E-mail"
                                autocomplete="off" />
                        </div>

                        <div className="group-employee">
                            <label for="responsibility">Cargo</label>
                            <select name="responsibility" id="respon">
                                <option value="">Selecione o Cargo:</option>
                                <option value="3">- Gerente</option>
                                <option value="2">- Chefe de Oficina</option>
                                <option value="1">- Mêcanico</option>
                            </select>
                        </div>

                        <div className="group-employee">
                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite a sua senha" />
                        </div>

                        <div className="group-employee">
                            <label for="confirmPassword">Confirmar Senha</label>
                            <input type="password" name="confirmPassword" id="confirmPassword"
                                placeholder="Confirme sua senha" />
                        </div>
                    </form>
                    <div className="buttons">
                        <button name="cancel" id="cancelPage" className="cancel-page">Cancelar</button>
                        <button name="next" id="nextPage" className="next-page">Cadastrar Funcionário</button>
                    </div>
                </div>
            </div>
        </div>
    );
}