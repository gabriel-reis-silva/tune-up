import "../assets/css/workshop.css";
import Button from "./Button"

export default function Workshop({ img, name, address, }) {
    return (
        <div className="workshop">
            <img src={img} alt={"Imagem da oficina " + name} />
            <div className="workshop_details">
                <div className="name-address">
                    <h2 className="name-workshop">{name}</h2>
                    <p className="workshop_address">{address}</p>
                </div>
                <Button classNameButton="btn-details" >Detalhes da oficina</Button>
            </div>
        </div>
    )
}