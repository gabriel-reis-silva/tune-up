package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Integer> {

}
