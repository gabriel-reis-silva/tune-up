package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.repositorio.OrdemServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/ordem-servicos")
public class OrdemServicoController {

    @Autowired
    private OrdemServicoRepository repository;

    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid OrdemServico novaOrdemServico) {
        repository.save(novaOrdemServico);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getOrdensServicos() {
        List<OrdemServico> ordensServicos = repository.findAll();
        if(ordensServicos.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(ordensServicos);
    }
}
