package com.bandtec.tuneup.br.ecs.dominio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Double precoTotal;

    private String freios;

    private String estetica;

    private String eletricaEletronica;

    private String motor;

    private String preparacao;

    private String direcao;

    private String embreagem;

    private String outros;
}
