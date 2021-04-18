import React from "react";
import "../assets/reset.css";
import "../assets/home.css";
import missionIcon from '../assets/img/missaoIcon.png';
import visionIcon from '../assets/img/visaoIcon.png';
import valuesIcon from '../assets/img/valoresIcon.png';
import logoEcs from '../assets/img/EMS-Sem-Fundo-Branco.png'
import Button from "../components/Button";

export default function Home() {
    return (
        <React.Fragment>
            <div class="container">
                <div class="div_banner">
                    <div class="banner"></div>
                    <h1 class="title_banner">Qualquer problema, nós vamos solucionar</h1>
                </div>
                <div class="container_aboutus">
                    <div class="aboutus">
                        <h1 class="title_aboutus">
                            Quem somos
                        </h1>
                        <p class="paragraph_aboutus">
                            TUNE-UP é uma plataforma que integra, um sistema desenvolvido especialmente para as oficinas
                            mecânicas.
                            Combinando ferramentas de gestão e suporte à operação, especializado em colocar nas suas mãos tudo o
                            que você precisa para aprimorar serviços e atendimento com o gerenciamento da oficina com mais
                            eficiência!
                        </p>
                    </div>
                </div>
                <hr class="division_aboutus_msv" />
                <div class="container_msv">
                    <div className="card">
                        <h1>Missão</h1>
                        <img src={missionIcon} alt="" />
                        <p>
                            Satisfazer a necessidade de cada cliente, prestando um serviço com excelência em qualidade
                        </p>
                    </div>
                    <div className="card">
                        <h1>Visão</h1>
                        <img src={visionIcon} alt="" />
                        <p>
                            Ser reconhecida como uma empresa de ponta no segmento de oficinas mecânicas, inovando e gerando resultados
                        </p>
                    </div>
                    <div className="card">
                        <h1>Valores</h1>
                        <img src={valuesIcon} alt="" />
                        <p>
                            Profissionalismo; Comprometimento;
                            Trabalho em Equipe; Agilidade;
                            Flexibilidade;
                            Ética.
                        </p>
                    </div>
                </div>
                <div className="container_ecs">
                    <img src={logoEcs} alt="" />
                    <div className="card_ecs">
                        <h1>ECS</h1>
                        <p>
                            Inovando e contribuindo para o aprimoramento das oficinas, a ECS
                            produz dashboards, status  de produção, controle de fluxo de clientes e muito mais..
                        </p>
                        <p>
                            Assim que a ECS supera a cada dia, o desafio de oferecer meios para que oficinas acompanhem a dinâmica e correria do dia a dia
                        </p>
                        <Button classNameButton="btn_ecs" colorButton="#FFC000">Conheça a ECS</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}