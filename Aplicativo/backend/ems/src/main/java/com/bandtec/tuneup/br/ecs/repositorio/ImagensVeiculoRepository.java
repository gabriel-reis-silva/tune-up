package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.ImagensVeiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImagensVeiculoRepository extends JpaRepository<ImagensVeiculo, Integer> {

    List<ImagensVeiculo> findByOrdemServicoId(Integer ordemServicoId);

}
