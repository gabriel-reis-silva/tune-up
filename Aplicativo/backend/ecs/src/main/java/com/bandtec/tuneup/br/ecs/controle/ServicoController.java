package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Servico;
import com.bandtec.tuneup.br.ecs.repositorio.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/servicos")
public class ServicoController {
    @Autowired
    public ServicoRepository repository;

    @PostMapping
    public ResponseEntity postProprietario(@RequestBody @Valid Servico novoServico) {
        repository.save(novoServico);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getServicos() {
        List<Servico> servicos = repository.findAll();
        if(servicos.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(servicos);
    }
}
