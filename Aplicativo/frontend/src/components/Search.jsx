import logo from "../assets/img/Tune-Up.png";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import "../assets/css/search.css";

export default function Search() {
    let history = useHistory();
    function redirect() {
        history.push('/search-result')
    }
    return (
        <div className="search" id="searchScreen">
            <div className="box_search" id="boxScreen">
                <img src={logo} alt="" />
                <h1 className="title">BUSCAR POR OFICINAS</h1>
                <div className="inputs_search">
                    <div className="field">
                        <label htmlFor="state">Estado:</label>
                        <input type="text" name="state" />
                    </div>
                    <div className="field">
                        <label htmlFor="city">Cidade:</label>
                        <input type="text" name="city" />
                    </div>
                    <div className="field">
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" name="cep" />
                    </div>
                </div>
                <div className="buttons_search">
                    <Button onClick={hideSearch}>Cancelar</Button>
                    <Button onClick={redirect}>Buscar</Button>
                </div>
            </div>
        </div>
    )
}
function hideSearch() {
    const search = document.getElementById("searchScreen");
    const boxSearch = document.getElementById("boxScreen");
    const containerPage = document.getElementById("containerPage");
    search.style.display = "none";
    boxSearch.style.display = "none";
    containerPage.style.filter = "blur(0px)";
}

