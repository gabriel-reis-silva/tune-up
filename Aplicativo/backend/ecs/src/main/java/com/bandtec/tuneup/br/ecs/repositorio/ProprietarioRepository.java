package com.bandtec.tuneup.br.ecs.repositorio;

import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProprietarioRepository extends JpaRepository<Proprietario, Integer> {
    Proprietario findByEmail(String email);
    Proprietario findBySenha(String senha);
}
