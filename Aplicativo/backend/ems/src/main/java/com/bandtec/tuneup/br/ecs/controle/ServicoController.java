package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Servico;
import com.bandtec.tuneup.br.ecs.repositorio.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/servicos")
@CrossOrigin
public class ServicoController {

    @Autowired
    public ServicoRepository repository;

    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid Servico novoServico) {
        repository.save(novoServico);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getAllOrdemServico() {
        List<Servico> listaServico = repository.findAll();
        if (listaServico.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(listaServico);
    }

    @GetMapping("/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<Servico> servico = repository.findById(id);
        if (servico == null) {
            return ResponseEntity.status(204).build();
        }
        System.out.println(servico);
        return ResponseEntity.status(200).body(servico);
    }


    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putOrdem(@PathVariable int id, @RequestBody Servico ordemServico) {
        Optional<Servico> servico = repository.findById(id);
        if (servico.isPresent()) {
            if (ordemServico.getFkOficina() != null) {
                servico.get().setFkOficina(ordemServico.getFkOficina());
            }
            if (ordemServico.getDescricaoServico() != null) {
                servico.get().setDescricaoServico(ordemServico.getDescricaoServico());
            }
            repository.save(servico.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity deleteOrdemServico(@PathVariable Integer id) {
        if (repository.findById(id).isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.status(200).body("Servico " +
                    id + " excluído com sucesso!");
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
