import React from 'react';
import axios from 'axios';

export default class PostUsuarios extends React.Component {
    createUser = async () => {
        let res = await api.post('/', {
            "cpf": "36310062093",
            "dataNasc": "2020-12-31",
            "email": "email@email.com",
            "nome": "astolfo silva",
            "senha": "senha123",
            "telefone": "5892-5415"
        })
        console.log(res)
    }
    render(){
        return(
            <button onClick={this.createUser}>Cadastrar</button>
        )
    }

}