import Nav from "../components/Nav";
import Img from "../assets/img/Car-Workshop.jpg";
import Workshop from "../components/Workshop";
import "../assets/css/search-result.css";

export default function SearchResult() {
    return (
        <div>
            <div className="container">
                <Nav />
                <div className="box_workshops">
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                    <Workshop img={Img} name="Oficina do zé" address="Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001" />
                </div>
            </div>
        </div>
    );
}