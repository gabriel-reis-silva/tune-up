import React from "react/";
import ReactDOM from "react-dom";
// import UsuariosLista from './services/UsuariosLista';
import PostUsuarios from './services/PostUsuarios';
import App from "./App";


ReactDOM.render(
    <React.StrictMode>
        
        {/* <App /> */}
        <PostUsuarios />
        {/* <UsuariosLista /> */}
    </React.StrictMode>,
    document.getElementById("root"));