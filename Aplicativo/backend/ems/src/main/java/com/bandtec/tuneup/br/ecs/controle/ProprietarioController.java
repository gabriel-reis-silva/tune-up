package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Cliente;
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

    @PostMapping("/login")
    public ResponseEntity loginProprietario(@RequestBody Proprietario proprietarioLogin) {
        Proprietario proprietarioLogin1 = repository.findByEmailAndSenha(proprietarioLogin.getEmail(), proprietarioLogin.getSenha());
        if (proprietarioLogin1 != null) {
            proprietarioLogin1.setLogado(true);
            Cliente.sessao = proprietarioLogin1.getId();
            repository.save(proprietarioLogin1);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(401).build();
        }
    }

    @GetMapping("/proprietario/{email}")
    public ResponseEntity getUser(@PathVariable String email) {
        Proprietario proprietario = repository.findByEmail(email);
        if ( proprietario != null) {
            return ResponseEntity.status(200).body(repository.findById(proprietario.getId()));
        }
        return ResponseEntity.status(404).build();
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
            Cliente.sessao = null;
            proprietarioLogout.setLogado(false);
            repository.save(proprietarioLogout);
            return ResponseEntity.status(200).build();
        }
    }


    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putProprietario(@PathVariable int id, @RequestBody Proprietario proprietarioAtributo) {
        Optional<Proprietario> proprietario = repository.findById(id);
        if (proprietario.isPresent()) {
            if (proprietarioAtributo.getNome() != null) {
                proprietario.get().setNome(proprietarioAtributo.getNome());
            }
            if (proprietarioAtributo.getDataNasc() != null) {
                proprietario.get().setDataNasc(proprietarioAtributo.getDataNasc());
            }
            if (proprietarioAtributo.getEmail() != null) {
                proprietario.get().setEmail(proprietarioAtributo.getEmail());
            }
            if (proprietarioAtributo.getCpf() != null) {
                proprietario.get().setCpf(proprietarioAtributo.getCpf());
            }
            if (proprietarioAtributo.getTelefone() != null) {
                proprietario.get().setTelefone(proprietarioAtributo.getTelefone());
            }
            if (proprietarioAtributo.getNivelAcesso() > 0 && proprietarioAtributo.getNivelAcesso() <= 3) {
                proprietario.get().setNivelAcesso(proprietarioAtributo.getNivelAcesso());
            }
            if (proprietarioAtributo.getSenha() != null) {
                proprietario.get().setSenha(proprietarioAtributo.getSenha());
            }
            repository.save(proprietario.get());
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
