package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.Oficina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OficinaRepository extends JpaRepository<Oficina, Integer> {

    @Query("select o from Oficina o where nome like %?1%")
    List<Oficina> findAllByNome(String nome);
}
