import { Link } from 'react-router-dom';
import logoNav from '../assets/img/Tune-Up.png';

export default function Nav() {
    return (
        <nav class="navigation">
            <div class="topbar_navigation">
                <div className="search-nav">
                    <input type="text" className="search_bar" />
                    <select name="" id="" className="selection_search">
                        <option value="">CEP</option>
                        <option value="">Estado</option>
                        <option value="">Cidade</option>
                    </select>
                </div>
                <div className="login_field">
                    <Link to="/login" class="btn_login">Entrar</Link>
                    <i class="far fa-user-circle"></i>
                </div>
            </div>
            <div class="bottombar_navigation">
                <img class="logo_navigation" src={logoNav} alt="Logo da empresa tuneup" />
                <div class="links_navigation">
                    <button class="link_navigation">PÁGINA INICIAL</button>
                    <button class="link_navigation">QUEM SOMOS</button>
                    <button class="link_navigation">EMS</button>
                    <button class="link_navigation">CONTATO CONOSCO</button>
                </div>
            </div>
        </nav>
    );
}