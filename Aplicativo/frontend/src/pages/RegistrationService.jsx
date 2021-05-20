import { Link } from "react-router-dom";
import "../assets/css/registration_service.css";
import lgoTuneUp from "../assets/img/Tune-Up.png";
import backImage from "../assets/img/fundo-login.jpeg";

export default function RegistrationService() {
    return(
        <div className="regis-services-banner">
            <img src={backImage} alt="" className="services-banner-back" />

            <div className="container-services">


                <div id="container-service-service">
                    <div className="header-register">
                        <img src={lgoTuneUp} alt="Logo Tune-Up" />
                        <h1>Cadastro de Serviços</h1>
                    </div>

                    <div className="services">
                        <div className="service-brakes">
                            <div className="title-service">
                                <h3>Freios</h3>
                            </div>
                            <div className="container-service">
                                <div className="services-right">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="troca-pastilhas" />
                                        <label for="troca-pastilhas">Troca de Pastilhas</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="lona-freios" />
                                        <label for="lona-freios">Lona de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="disco-freios" />
                                        <label for="disco-freios">Disco de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="cabos-freios" />
                                        <label for="cabos-freios">Cabos de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="fluido-freios" />
                                        <label for="fluido-freios">Fluído de Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="pneus" />
                                        <label for="pneus">Pneus</label>
                                    </div>
                                </div>

                                <div className="services-left">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="hidro-vacuo-freios" />
                                        <label for="hidro-vacuo-freios">Hidro Vácuo dos Freios</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" name="" id="alinhamento" />
                                        <label for="alinhamento">alinhamento</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="balanciamento" />
                                        <label for="balanciamento">Balanciamento</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="freios-abs" />
                                        <label for="freios-abs">Freios ABS</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="revisao-componentes-freios" />
                                        <label for="revisao-componentes-freios">Revisão dos Componentes de
                                            Freios</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-motor">
                            <div className="title-service">
                                <h3>Motor</h3>
                            </div>
                            <div className="container-service">
                                <div className="services-right">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="troca-oleo-motor" />
                                        <label for="troca-oleo-motor">Troca de Oléo do Motor</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="arrefeiciamento" />
                                        <label for="arrefeiciamento">Arrefeiciamento</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="motores-ciclo-diesel" />
                                        <label for="motores-ciclo-diesel">Motores Ciclo Diesel</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="motores-ciclo-otto" />
                                        <label for="motores-ciclo-otto">Motores Ciclo Otto</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="reguladores-motor" />
                                        <label for="reguladores-motor">Reguladores de Motor</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="injecao-eletronica-diesel" />
                                        <label for="injecao-eletronica-diesel">Injeção Eletrônica Diesel</label>
                                    </div>
                                </div>

                                <div className="services-left">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="retificar-motores" />
                                        <label for="retificar-motores">Retificar Motores</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="troca-filtros" />
                                        <label for="troca-filtros">Troca de Filtros</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="radiadores" />
                                        <label for="radiadores">Radiadores</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="injecao-eletronica" />
                                        <label for="injecao-eletronica">Injeção Eletrônica</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="injecao-ignicao-eletronica" />
                                        <label for="injecao-ignicao-eletronica">Injeção e Ignição Eletrônica</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="revisao-sistema-arrefeiciamento" />
                                        <label for="revisao-sistema-arrefeiciamento">Revisão no Sistema de
                                            Arrefeiciamento
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-service">
                            <div className="service-aesthetics">
                                <div className="title-service">
                                    <h3>Estética</h3>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="funilaria" />
                                    <label for="funilaria">Funilária</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="lavagem-polimento" />
                                    <label for="lavagem-polimento">Lavagem e Polimento</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="plotagem" />
                                    <label for="plotagem">Plotagem</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="tapecaria" />
                                    <label for="tapecaria">Tapeçaria</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="limpeza-fluidos" />
                                    <label for="limpeza-fluidos">Limpeza e Fluidos</label>
                                </div>
                            </div>

                            <div className="service-automotive-preparation">
                                <div className="title-service">
                                    <h3>Preparação Automotiva</h3>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="preparacao-motores" />
                                    <label for="preparacao-motores">Preparação de Motores</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="turbo" />
                                    <label for="turbo">Turbo</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="remap-potencia" />
                                    <label for="remap-potencia">Remap de Potência</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="suspensao" />
                                    <label for="suspensao">Suspensão</label>
                                </div>
                            </div>
                        </div>

                        <div className="service-electrical-electronic">
                            <div className="title-service">
                                <h3>Elétrica e Eletrônica</h3>
                            </div>
                            <div className="container-service">
                                <div className="services-right">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="troca-multimidia" />
                                        <label for="troca-multimidia">Troca de Multimídia</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="personalizacao-painel" />
                                        <label for="personalizacao-painel">Personalização de Painel</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="instalacao-som" />
                                        <label for="instalacao-som">Instalação de Som</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="vidros-eletricos" />
                                        <label for="vidros-eletricos">Vidros Elétricos</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="aplicacao-led" />
                                        <label for="aplicacao-led">Aplicação de LED</label>
                                    </div>
                                </div>

                                <div className="services-left">
                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="alarme" />
                                        <label for="alarme">Alarme</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="travas" />
                                        <label for="travas">Travas</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="airbag" />
                                        <label for="airbag">AirBag</label>
                                    </div>

                                    <div className="custom-checkbox">
                                        <input type="checkbox" id="reparo-modulos" />
                                        <label for="reparo-modulos">Reparo de Módulos</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="service-aesthetics">
                            <div className="title-service">
                                <h3>Embreagem</h3>
                            </div>
                            <div className="container-service-embreagem">
                                <div className="custom-checkbox">
                                    <input type="checkbox" id="manutencao-embreagem" />
                                    <label for="manutencao-embreagem">Manutenção da Embreagem</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="troca-disco" />
                                    <label for="troca-disco">Troca de Disco</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="troca-plato" />
                                    <label for="troca-plato">Troca de Platô</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="rolamento" />
                                    <label for="rolamento">Rolamento</label>
                                </div>

                                <div className="custom-checkbox">
                                    <input type="checkbox" id="verificacao-cabos" />
                                    <label for="verificacap-cabos">Verificação de Cabos</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="finished-register">
                        <button name="cancel-service" id="cancel-finished-service" className="cancel-service">Cancelar</button>
                        <button name="finish-service" id="finished-service" className="finished-service">Finalizar
                            Cadastro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}