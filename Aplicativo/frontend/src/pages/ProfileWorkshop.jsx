import "../assets/css/profile-workshop.css";
import NavMechanic from "../components/NavMechanic";
import Button from "../components/Button"
import imgWorshop from "../assets/img/Logo-TuneUp-Icon.png";
import { useState } from "react";
import api from "../services/api";

export default function ProfileWorkshop() {

    const [mensagem, setMensagem] = useState([]);
    
    async function enviarMensagem() {

        // if (mensagem.value === "" || data.value === "" || horario.value === "") {
        //     alert("Campos vazios!");
        // } else if(mensagem.value === null || data.value === null || horario.value === null){
        //     alert("Campos vazios!")
        // }else {

        try {
            const resposta = await api.post("/envia-email", {
                ...mensagem,
            });
            if (resposta.status === 200) {
                alert("Mensagem enviada com sucesso!");
            }
        } catch (err) {
            alert("Erro ao enviar mensagem, tente novamente");
        }
    // }
}

    function handleInput(evento) {

        
        const { name, value } = evento.target;
        console.log(evento.name)
        setMensagem({
            ...mensagem,
            [name]: value
        });
        console.log(mensagem);
    }

    return (

        <div className="container_profile_workshop">
            <NavMechanic />
            <div className="box-profile_workshop">
                <div className="info_profile_workshop">
                    <div className="box-img_workshop-profile_workshop">
                        <img src={imgWorshop} className="img_workshop-profile_workshop" alt="" />
                    </div>
                    <div className="info_workshop">
                        <div className="name_opening_hours_info_workshop">
                            <h1 className="name-profile_workshop">
                                Oficina do Zé
                            </h1>
                            <div className="opening_hours-profile_workshop">
                                <h2 className="opening_hours_title-profile_workshop">
                                    Horário de funcionamento
                            </h2>
                                <p className="opening_hours_text-profile_workshop">
                                    Segunda- feira até Sábados: 8h até às 20h
                                    Feríados e Domingos: 12h até às 19h
                            </p>
                            </div>
                        </div>
                        <div className="location_contact-profile_workshop">
                            <div className="location-profile_workshop">
                                <h2 className="title_location-profile_workshop">Endereço</h2>
                                <p className="location_text-profile_workshop">
                                    Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001
                                </p>
                            </div>
                            <div className="contact-profile_workshop">
                                <h2 className="contact_title-profile_workshop">
                                    Contato
                                </h2>
                                <div className="contact_title-profile_workshop">
                                    <h3 className="phone_title-profile_workshop">Telefone:</h3>
                                    <p className="phone-profile_workshop">(11) 5560 -3437</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box_assessment-profile_workshop">
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                    <i className="star_assessment-profile_workshop far fa-star"></i>
                </div>
                <div className="services-profile_workshop">
                    <hr className="divisor_services-profile_workshop" />
                    <h1 className="title_services-profile_workshop">Serviços</h1>
                    <div className="content_services-profile_workshop">
                        <p className="service-profile_workshop">Troca de óleo</p>
                        <p className="service-profile_workshop">Embreagem</p>
                        <p className="service-profile_workshop">Arrefecimento</p>
                        <p className="service-profile_workshop">Freios</p>
                        <p className="service-profile_workshop">Escapamentos</p>
                        <p className="service-profile_workshop">Injeção eletrônica</p>
                        <p className="service-profile_workshop">Radiadores</p>
                        <p className="service-profile_workshop">Retífica de motores</p>
                        <p className="service-profile_workshop">Filtros</p>
                        <p className="service-profile_workshop">Troca de óleo</p>
                        <p className="service-profile_workshop">Embreagem</p>


                    </div>
                    <hr className="divisor_services-profile_workshop" />
                </div>
                <div className="scheduling-profile_workshop">
                    <h1 className="title_scheduling-profile_workshop">Agendar Visita</h1>
                    <form className="fields_scheduling-profile_workshop" action="">
                    {/* <div className="fields_scheduling-profile_workshop"> */}
                        <div className="field_scheduling-profile_workshop">
                            <label htmlFor="data_schedule">Data:</label>
                            <input required="true" onChange={handleInput} type="date" name="data" />
                        </div>
                        <div className="field_scheduling-profile_workshop">
                            <label htmlFor="schedule">Horario:</label>
                            <input required="true" onChange={handleInput} type="text" name="horario" id="horario" />
                        </div>
                    {/* </div> */}
                    <textarea required="true" onChange={handleInput} name="texto" id="" placeholder="Estou entrando em contato pois..." className="msg_scheduling-profile_workshop"></textarea>
                    </form>
                    <Button type="submit" onClick={enviarMensagem} classNameButton="btn_scheduling-profile_workshop" >Agendar</Button>
                </div>
            </div>

        </div>
    )
}