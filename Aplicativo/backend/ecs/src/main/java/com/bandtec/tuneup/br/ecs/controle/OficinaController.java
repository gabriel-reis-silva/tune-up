package com.bandtec.tuneup.br.ecs.controle;


import com.bandtec.tuneup.br.ecs.dominio.Oficina;
import com.bandtec.tuneup.br.ecs.repositorio.OficinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/oficinas")
public class OficinaController {

    @Autowired
    public OficinaRepository repository;

    @PostMapping
    public ResponseEntity postOficina(@RequestBody @Valid Oficina novaOficina) {
        repository.save(novaOficina);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getOficinas() {
        List<Oficina> oficinas = repository.findAll();
        if(oficinas.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(oficinas);
    }
}
