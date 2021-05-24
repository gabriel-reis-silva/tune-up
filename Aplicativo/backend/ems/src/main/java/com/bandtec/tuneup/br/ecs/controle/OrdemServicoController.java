package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.dominio.PilhaObj;
import com.bandtec.tuneup.br.ecs.repositorio.OrdemServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/ordens-de-servicos")
public class OrdemServicoController {

    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    

    // POST - para nova ordem de serviço
    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid OrdemServico novaOrdemServico) {
        ordemServicoRepository.save(novaOrdemServico);
        return ResponseEntity.status(201).body("Nova ordem registrada com sucesso!");
    }

    // GET - BUscar todas as ordens de serviços no sistema
    @GetMapping
    public ResponseEntity getOrdensServicos() {
        List<OrdemServico> ordemServicos = ordemServicoRepository.findAll();
        if (ordemServicos.isEmpty()) {
            return ResponseEntity.status(204).body("Lista de ordens de serviços vazia!");
        } else {
            return ResponseEntity.status(200).build();
        }
    }

    /*@GetMapping("/busca-pilha")
    public ResponseEntity getBuscaNaPilha() {
    }*/

}
