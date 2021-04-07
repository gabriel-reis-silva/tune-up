package com.bandtec.tuneup.br.ecs.dominio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import java.time.LocalDate;

@Entity
public class OrdemServico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Past
    private LocalDate dtEmissao;

    @Future
    private LocalDate dtEstimada;

    @NotBlank
    private String status;
}
