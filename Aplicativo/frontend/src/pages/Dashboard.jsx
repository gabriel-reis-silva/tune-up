import React from "react"
import NavSystem from '../components/NavSystem';
import ImgDash from "../assets/img/image-dash-teste.png";
import "../assets/reset.css";
import "../assets/home.css";
// import "../assets/css/style.css";
// import "../assets/css/system_page.css";
import '../assets/css/style_dashboards.css';

export default function Dashboard() {
    return (
        <React.Fragment>
        <NavSystem />
        {/* Dashboards  */}
        <div class="showcase-dash">
            <div class="cards">

                 {/* Gráfico de ...  */}
                <div class="card g-1">
                    <img src={ImgDash} alt=""/>
                </div>

                {/* Gráfico de faturamento mensal  */}
                <div class="card g-1">
                    <img src={ImgDash} alt=""/>
                </div>
            </div>

            <div class="cards-status-os">
                 {/* Gráficos status da OS  */}
                <div class="cardg-2">
                    <img src={ImgDash} alt=""/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}