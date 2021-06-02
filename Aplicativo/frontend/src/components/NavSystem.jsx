import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoEms from "../assets/img/EMS-Sem-Fundo-Black.png";
import api from "../services/api";

export default function NavSystem() {
    const [usuario, getUsuario] = useState([]);

  useEffect(() => {
    async function getUser() {
      const resposta = await api.get(`/proprietarios/proprietario/${sessionStorage.getItem('emailProprietario')}`);
      getUsuario(resposta.data);
    }
    getUser();
  }, []);

    return(
        <>
        <nav className="navigation">
        <div className="topbar_navigation">
            <a className="btn_login">
            {usuario.nome}</a>
            <i className="far fa-user-circle"></i>
        </div>
        <div className="bottombar_navigation">
            <img className="logo_navigation" src={logoEms} alt="Logo da empresa tuneup"/>
            <div className="links_navigation">
                {/* <Link to="/dashboard"><button className="link_navigation">DASHBOARD</button></Link> */}
                <a className="title-nav-mechanic" href="/ordem-de-servico"><button className="link_navigation">ORDEM DE SERVIÇO</button></a>
                <a className="title-nav-mechanic" href="/visualizacao-funcionario"><button className="link_navigation">FUNCIONÁRIOS</button></a>
                <a className="title-nav-mechanic" href="/visualizacao-cliente"><button className="link_navigation">CLIENTES</button></a>
            </div>
        </div>
    </nav>
    </>
    )
}