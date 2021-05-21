import NavMechanic from "../components/NavMechanic";
import Img from "../assets/img/Car-Workshop.jpg";
import Workshop from "../components/Workshop";
import "../assets/css/search-result.css";
import Search from "../components/Search";
import Button from "../components/Button";

export default function SearchResult() {
    return (
        <div><Search />

            <div className="container" id="containerPage">
                <NavMechanic />
                <div className="search_field">
                    <Button onClick={showSearch} classNameButton="btn_search">BUSCAR OFICINAS</Button>
                </div>
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
function showSearch() {
    const search = document.getElementById("searchScreen");
    const boxSearch = document.getElementById("boxScreen");
    const containerPage = document.getElementById("containerPage");
    search.style.display = "flex";
    boxSearch.style.display = "flex";
    containerPage.style.filter = "blur(3px)";
}
