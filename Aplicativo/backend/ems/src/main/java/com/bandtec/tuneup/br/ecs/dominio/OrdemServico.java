package com.bandtec.tuneup.br.ecs.dominio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;
import java.time.LocalDate;

@Entity
public class OrdemServico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private LocalDate dtEmissao;

    @NotNull
    @Future
    private LocalDate dtEstimada;

    @NotBlank
    private String statusServico;

    @NotNull
    @DecimalMin(value = "0.0")
    private Double precoTotal;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getDtEmissao() {
        return dtEmissao;
    }

    public void setDtEmissao(LocalDate dtEmissao) {
        this.dtEmissao = dtEmissao;
    }

    public LocalDate getDtEstimada() {
        return dtEstimada;
    }

    public void setDtEstimada(LocalDate dtEstimada) {
        this.dtEstimada = dtEstimada;
    }

    public String getStatusServico() {
        return statusServico;
    }

    public void setStatusServico(String statusServico) {
        this.statusServico = statusServico;
    }

    public Double getPrecoTotal() {
        return precoTotal;
    }

    public void setPrecoTotal(Double precoTotal) {
        this.precoTotal = precoTotal;
    }

}
