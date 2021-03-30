package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Cliente;
import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import com.bandtec.tuneup.br.ecs.repositorio.ProprietarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/proprietarios")
public class ProprietarioController {
    private List<Proprietario> clientesLogados = new ArrayList<Proprietario>();

    @Autowired
    public ProprietarioRepository repository;

    @PostMapping
    public ResponseEntity postProprietario(@RequestBody @Valid Proprietario novoProprietario) {
        repository.save(novoProprietario);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getProprietarios() {
        List<Proprietario> proprietarios = repository.findAll();
        if (proprietarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(proprietarios);
    }

    @GetMapping("/login/{email}/{senha}")
    public ResponseEntity loginUsuario(@PathVariable String email, @PathVariable String senha) {
        Proprietario proprietarioEmail = repository.findByEmail(email);
        Proprietario proprietarioSenha = repository.findBySenha(senha);
        if (proprietarioEmail == null || proprietarioSenha == null) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body("Proprietário logado com sucesso! Bem vindo," + proprietarioEmail.getNome());
        }
    }
}
