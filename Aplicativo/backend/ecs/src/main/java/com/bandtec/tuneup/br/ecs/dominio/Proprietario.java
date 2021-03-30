package com.bandtec.tuneup.br.ecs.dominio;

import com.bandtec.tuneup.br.ecs.dominio.Cliente;

import javax.persistence.Entity;

@Entity
public class Proprietario extends Cliente {
    private int nivelAcesso;

    public Proprietario(int nivelAcesso) {
        this.nivelAcesso = nivelAcesso;
    }

    public int getNivelAcesso() {
        return nivelAcesso;
    }

    public void setNivelAcesso(int nivelAcesso) {
        this.nivelAcesso = nivelAcesso;
    }
}
