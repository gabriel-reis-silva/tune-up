package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioOficinaRepository extends JpaRepository<UsuarioOficina, Integer> {
    UsuarioOficina findByEmail(String email);
    UsuarioOficina findBySenha (String senha);

}
