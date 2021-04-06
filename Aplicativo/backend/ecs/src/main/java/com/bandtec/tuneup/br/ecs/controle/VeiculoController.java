package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Veiculo;
import com.bandtec.tuneup.br.ecs.repositorio.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository repository;

    @PostMapping
    public ResponseEntity postVeiculo(@RequestBody @Valid Veiculo novoVeiculo) {
        repository.save(novoVeiculo);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getVeiculos() {
        List<Veiculo> veiculos = repository.findAll();
        if(veiculos.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(veiculos);
    }
}
