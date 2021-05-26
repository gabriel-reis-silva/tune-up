import "../assets/css/profile-workshop.css";
import NavMechanic from "../components/NavMechanic";
import Button from "../components/Button"
import imgWorshop from "../assets/img/Logo-TuneUp-Icon.png";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ProfileWorkshop() {
    const params = useParams();
    const [oficina, getOficina] = useState([]);
    useEffect(() => {
        api.get(`oficinas/${params.id}`).then(response => {
            getOficina(response.data);
        })

    }, []);


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
                                {oficina.nome}
                            </h1>
                            <div className="opening_hours-profile_workshop">
                                <h2 className="opening_hours_title-profile_workshop">
                                    Horário de funcionamento
                            </h2>
                                <p className="opening_hours_text-profile_workshop">
                                    {oficina.hrFunc}
                                </p>
                            </div>
                        </div>
                        <div className="location_contact-profile_workshop">
                            <div className="location-profile_workshop">
                                <h2 className="title_location-profile_workshop">Endereço</h2>
                                <p className="location_text-profile_workshop">
                                    {
                                        oficina.rua + ", " +
                                        oficina.numero + " - " +
                                        oficina.complemento + " - Bairro " +
                                        oficina.bairro
                                    }
                                </p>
                            </div>
                            <div className="contact-profile_workshop">
                                <h2 className="contact_title-profile_workshop">
                                    Contato
                                </h2>
                                <div className="contact_title-profile_workshop">
                                    <h3 className="phone_title-profile_workshop">Telefone:</h3>
                                    <p className="phone-profile_workshop">{oficina.telefone}</p>
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
                    <div className="fields_scheduling-profile_workshop">
                        <div className="field_scheduling-profile_workshop">
                            <label htmlFor="data_schedule">Data:</label>
                            <input type="date" name="data_schedule" />
                        </div>
                        <div className="field_scheduling-profile_workshop">
                            <label htmlFor="schedule">Horario:</label>
                            <input type="text" name="schedule" />
                        </div>
                    </div>
                    <textarea name="" id="" placeholder="Estou entrando em contato pois..." className="msg_scheduling-profile_workshop"></textarea>
                    <Button classNameButton="btn_scheduling-profile_workshop" >Agendar</Button>
                </div>
            </div>

        </div>
    )
}