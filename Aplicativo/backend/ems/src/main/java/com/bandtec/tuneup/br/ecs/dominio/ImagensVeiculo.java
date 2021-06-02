package com.bandtec.tuneup.br.ecs.dominio;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class ImagensVeiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Column(length = 5_000_000)
    private byte[] image;

    @ManyToOne
    private OrdemServico ordemServico;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public OrdemServico getOrdemServico() {
        return ordemServico;
    }

    public void setOrdemServico(OrdemServico ordemServico) {
        this.ordemServico = ordemServico;
    }
}
