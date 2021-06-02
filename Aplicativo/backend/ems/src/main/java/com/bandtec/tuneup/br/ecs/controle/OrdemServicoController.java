package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Oficina;
import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.repositorio.OrdemServicoRepository;
import com.bandtec.tuneup.br.ecs.repositorio.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ordens-de-servico")
@CrossOrigin
public class OrdemServicoController {

    @Autowired
    public OrdemServicoRepository repository;

    @Autowired
    public VeiculoRepository veiculoRepository;



    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid OrdemServico novaOrdemServico) {
        repository.save(novaOrdemServico);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getAllOrdemServico() {
        List<OrdemServico>  listaOrdens = repository.findAll();
        if (listaOrdens.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(listaOrdens);
    }


    @GetMapping("/{id}")
    public ResponseEntity getPorID(@PathVariable Integer id) {
        Optional<OrdemServico> ordem = repository.findById(id);
        if (ordem == null) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(ordem);
    }

    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putOrdem(@PathVariable int id, @RequestBody OrdemServico ordemAtributo) {
        Optional<OrdemServico> ordem = repository.findById(id);
        if (ordem.isPresent()) {
            if (ordemAtributo.getDtEmissao() != null) {
                ordem.get().setDtEmissao(ordemAtributo.getDtEmissao());
            }
            if (ordemAtributo.getDtEstimada() != null) {
                ordem.get().setDtEstimada(ordemAtributo.getDtEstimada());
            }
            if (ordemAtributo.getStatusServico() != null) {
                ordem.get().setStatusServico(ordemAtributo.getStatusServico());
            }
            if (ordemAtributo.getPrecoTotal() != null) {
                ordem.get().setPrecoTotal(ordemAtributo.getPrecoTotal());
            }
            repository.save(ordem.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity deleteOrdemServico(@PathVariable Integer id) {
        if (repository.findById(id).isPresent()) {
            repository.deleteById(id);
            return ResponseEntity.status(200).body("Ordem de Servico " +
                    id + " excluída com sucesso!");
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
