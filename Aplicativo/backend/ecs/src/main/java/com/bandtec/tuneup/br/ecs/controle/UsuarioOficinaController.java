package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import com.bandtec.tuneup.br.ecs.repositorio.UsuarioOficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioOficinaController {
    private List<UsuarioOficina> clientesLogados = new ArrayList<UsuarioOficina>();

    @Autowired
    public UsuarioOficinaRepository repository;

    UsuarioOficina usera = new UsuarioOficina();

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
         usera = usuarioEmail;
        usera.setLogado(true);
        System.out.println("o usuario " + repository.findByEmail(email).getNome()+" está lodago?" + repository.findByEmail(email).getLogado());
        if (usuarioEmail == null || usuarioSenha == null) {
            return ResponseEntity.status(401).build();
        } else {
            repository.findByEmail(email).setLogado(true);
            usuarioEmail.setLogado(true);
            return ResponseEntity.status(200).body("Usuário logado com sucesso! Bem vindo," + usuarioEmail.getNome());
        }
    }

    @GetMapping("/logados")
    public ResponseEntity getLogados() {
        List<UsuarioOficina> usuario = repository.findAll();
        UsuarioOficina sa = new UsuarioOficina();
//        for (int i = 0; i >= usuario.size(); i++) {
//            System.out.println("\nlogado: " + usuario.get(i).getLogado());
//            if (u.getLogado()) {
//                sa = u;
//                return ResponseEntity.status(200).body(u);
//            } else if (!u.getLogado()) {
////                return ResponseEntity.status(204).body("Não há usuários logados");
//                return ResponseEntity.status(200).body(u);
//            }
//        }
        return ResponseEntity.status(200).body(usera.getLogado());
    }

    @GetMapping("/logout/{id}")
    public ResponseEntity logoutUsuario(@PathVariable Integer id) {
        UsuarioOficina user = repository.getOne(id);
        if (user == null) {
            return ResponseEntity.status(404).body("Usuário não cadastrado");
        } else if (user.getLogado()) {
            user.setLogado(false);
            return ResponseEntity.status(200).body("Usuário " + user.getNome() + " deslogado!");
        }
        return ResponseEntity.status(404).body("O usuário não estava logado");
    }

}