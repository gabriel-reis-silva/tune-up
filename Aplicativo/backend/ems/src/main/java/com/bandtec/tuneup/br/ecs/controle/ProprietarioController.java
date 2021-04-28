package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.ListaObj;
import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import com.bandtec.tuneup.br.ecs.repositorio.ProprietarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/proprietarios")
public class ProprietarioController {

    @Autowired
    public ProprietarioRepository repository;

    List<Proprietario> proprietarios;
    List<Proprietario> logados;

    @PostMapping
    public ResponseEntity postUsuario(@RequestBody @Valid Proprietario novoProprietario) {
        repository.save(novoProprietario);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuarios() {
        proprietarios = repository.findAll();
        if (proprietarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(proprietarios);
    }

    @GetMapping("/login/{email}/{senha}")
    public ResponseEntity loginUsuario(@PathVariable String email, @PathVariable String senha) {
        Proprietario proprietarioLogin = repository.findByEmailAndSenha(email, senha);
        if (proprietarioLogin == null) {
            return ResponseEntity.status(401).build();
        } else {
            proprietarioLogin.setLogado(true);
            repository.save(proprietarioLogin);
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/logados")
    public ResponseEntity getLogados() {
        logados = repository.findAllByLogado(true);
        if (logados.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(logados);
        }
    }

    @GetMapping("/logout/{email}/{senha}")
    public ResponseEntity logoutUsuario(@PathVariable String email, @PathVariable String senha) {
        Proprietario proprietarioLogout = repository.findByEmailAndSenha(email, senha);
        if (proprietarioLogout == null) {
            return ResponseEntity.status(401).build();
        } else {
            proprietarioLogout.setLogado(false);
            repository.save(proprietarioLogout);
            return ResponseEntity.status(200).build();
        }
    }


    @PutMapping("/alterarsenha/{id}/{senha}")
    public ResponseEntity putPasswordProprietario(@PathVariable int id, @PathVariable String senha) {
        Optional<Proprietario> proprietario = repository.findById(id);
        if (proprietario.isPresent()) {
            Proprietario proprietario1 = proprietario.get();
            proprietario1.setSenha(senha);
            repository.save(proprietario1);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/delete/{email}/{senha}")
    public ResponseEntity deleteUsuario(@PathVariable String email, @PathVariable String senha) {
        Proprietario proprietarioDelete = repository.findByEmailAndSenha(email, senha);
        if (proprietarioDelete == null) {
            return ResponseEntity.status(401).build();
        } else {
            proprietarioDelete.setLogado(false);
            repository.delete(proprietarioDelete);
        }
        return ResponseEntity.status(200).build();
    }


}
