package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import com.bandtec.tuneup.br.ecs.repositorio.UsuarioOficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioOficinaController {
    private List<UsuarioOficina> clientesLogados = new ArrayList<UsuarioOficina>();

    @Autowired
    public UsuarioOficinaRepository repository;

    @PostMapping
    public ResponseEntity postUsuario(@RequestBody @Valid UsuarioOficina novoUsuario) {
        repository.save(novoUsuario);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuarios() {
        List<UsuarioOficina> usuarios = repository.findAll();
        if (usuarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(usuarios);
    }

    @GetMapping("/login/{email}/{senha}")
    public ResponseEntity loginUsuario(@PathVariable String email, @PathVariable String senha) {
        UsuarioOficina usuarioEmail = repository.findByEmail(email);
        UsuarioOficina usuarioSenha = repository.findBySenha(senha);
        if (usuarioEmail == null || usuarioSenha == null) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body("Usuário logado com sucesso! Bem vindo," + usuarioEmail.getNome());
        }
    }
}