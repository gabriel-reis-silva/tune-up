import { Link } from 'react-router-dom';
import logoNav from '../assets/img/Tune-Up.png';

export default function Nav() {
    return (
        <nav class="navigation">
            <div class="topbar_navigation">
                <Link to="/login" class="btn_login">Entrar</Link>
                <i class="far fa-user-circle"></i>
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