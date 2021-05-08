import Button from "../components/Button";
import "../assets/css/register_employee.css";
import Logo from "../assets/img/Tune-Up.png";

export default function RegisterEmployee() {
    return (
        <div id="owner-register-container">
            <div class="img-back">
                <img className="logo_" src={Logo} alt="" />
                <h1>Cadastro de funcionário</h1>
            </div>

            <form action="">
                <div class="group">
                    {/* Nome Completo */}
                    <label for="completeName">Nome</label>
                    <input type="name" name="name" id="name" placeholder="Digite seu nome completo" autocomplete="off"/>
                </div>

                <div class="group">
                    {/*Data de Nascimento*/}
                    <label for="dtBirth ">Data de Nascimento</label>
                    <input type="text" id="calendar" name="calendar" placeholder="00/00/0000" />
                </div>

                <div class="group">
                    {/*CPF*/}
                    <label for="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" placeholder="111.111.111-11"/>
                </div>

                <div class="group">
                    {/*Telefone*/}
                    <label for="phone">Telefone</label>
                    <input type="tel" name="phone" id="phone" placeholder="11 55555-5555"/>
                </div>

                <div class="group">
                    {/* E-mail */}
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu E-mail" autocomplete="off"/>
                </div>

                <div class="group">
                    {/* Responsibility */}  
                    <label for="responsibility">Cargo</label>
                    <select name="responsibility" id="respon">
                        <option value="">Selecione o Cargo:</option>
                        <option value="gerente">- Gerente</option>
                        <option value="chefe-oficina">- Chefe de Oficina</option>
                        <option value="mecanico">- Mêcanico</option>
                    </select>
                </div>

                <div class="group">
                    {/* Password */}
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite a sua senha"/>
                </div>

                <div class="group">
                    {/* Confirm Password */}
                    <label for="confirmPassword">Confirmar Senha</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha"/>
                </div>
            </form>
            <button classNameButton="btn_registerEmployee">Cadastrar Funcionário</button>
        </div>
    );
}