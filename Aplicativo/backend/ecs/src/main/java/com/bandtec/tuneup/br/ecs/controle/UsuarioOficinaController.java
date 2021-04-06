package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import com.bandtec.tuneup.br.ecs.repositorio.UsuarioOficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioOficinaController {

    @Autowired
    public UsuarioOficinaRepository repository;

    List<UsuarioOficina> usuarios;
    List<UsuarioOficina> logados;

    @PostMapping
    public ResponseEntity postUsuario(@RequestBody @Valid UsuarioOficina novoUsuario) {
        repository.save(novoUsuario);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuarios() {
        usuarios = repository.findAll();
        if (usuarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(usuarios);
    }

    @GetMapping("/login/{email}/{senha}")
    public ResponseEntity loginUsuario(@PathVariable String email, @PathVariable String senha) {
        UsuarioOficina usuarioLogin = repository.findByEmailAndSenha(email, senha);
        if (usuarioLogin == null) {
            return ResponseEntity.status(401).build();
        } else {
            usuarioLogin.setLogado(true);
            repository.save(usuarioLogin);
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/logados")
    public ResponseEntity getLogados() {
        logados = repository.findAllByLogado(true);
        System.out.println("logados:" + logados);
        if (logados.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(logados);
        }
    }

    @GetMapping("/logout/{email}/{senha}")
    public ResponseEntity logoutUsuario(@PathVariable String email, @PathVariable String senha) {
        UsuarioOficina usuarioLogout = repository.findByEmailAndSenha(email, senha);
        if (usuarioLogout == null) {
            return ResponseEntity.status(401).build();
        } else {
            usuarioLogout.setLogado(false);
            repository.save(usuarioLogout);
            return ResponseEntity.status(200).build();
        }
    }
}