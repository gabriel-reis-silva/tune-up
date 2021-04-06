package com.bandtec.tuneup.br.ecs.dominio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @NotNull
    private String modelo;

    @NotBlank
    @NotNull
    private String marca;

    @NotBlank
    @NotNull
    private String cor;

    @NotBlank
    @NotNull
    private String categoria;

    @NotBlank
    @NotNull
    private int ano;
}
