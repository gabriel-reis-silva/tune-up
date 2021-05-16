import { Link } from "react-router-dom";
import logoEms from "../assets/img/EMS-Sem-Fundo-Black.png";


export default function NavSystem() {
    return(
        <nav className="navigation">
        <div className="topbar_navigation">
            <a className="btn_login">OFICINA DO ZÉ</a>
            <i className="far fa-user-circle"></i>
        </div>
        <div className="bottombar_navigation">
            <img className="logo_navigation" src={logoEms} alt="Logo da empresa tuneup"/>
            <div className="links_navigation">
                <Link to="/dashboard"><button className="link_navigation">DASHBOARD</button></Link>
                <a href=""><button className="link_navigation">ORDEM DE SERVIÇO</button></a>
                <a href=""><button className="link_navigation">CLIENTES</button></a>
                <a href=""><button className="link_navigation">FUNCIONÁRIOS</button></a>
            </div>
        </div>
    </nav>
    )
}