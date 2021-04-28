import { Link } from "react-router-dom";
import logoEms from "../assets/img/EMS-Sem-Fundo-Black.png";


export default function NavSystem() {
    return(
        <nav class="navigation">
        <div class="topbar_navigation">
            <a class="btn_login">OFICINA DO ZÉ</a>
            <i class="far fa-user-circle"></i>
        </div>
        <div class="bottombar_navigation">
            <img class="logo_navigation" src={logoEms} alt="Logo da empresa tuneup"/>
            <div class="links_navigation">
                <Link to="/dashboard"><button class="link_navigation">DASHBOARD</button></Link>
                <a href=""><button class="link_navigation">ORDEM DE SERVIÇO</button></a>
                <a href=""><button class="link_navigation">CLIENTES</button></a>
                <a href=""><button class="link_navigation">FUNCIONÁRIOS</button></a>
            </div>
        </div>
    </nav>
    )
}