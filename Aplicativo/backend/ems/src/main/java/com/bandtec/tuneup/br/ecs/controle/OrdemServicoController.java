package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.FilaObj;
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

    FilaObj<OrdemServico> servicoFilaObj = new FilaObj<>(1000);


    // POST - para nova ordem de serviço
    @PostMapping
    public ResponseEntity postOrdemServico(@RequestBody @Valid OrdemServico novaOrdemServico) {
        ordemServicoRepository.save(novaOrdemServico);
        servicoFilaObj.insertFila(novaOrdemServico);
        return ResponseEntity.status(201).body("Nova ordem registrada com sucesso!");
    }

    // GET - BUscar todas as ordens de serviços no sistema
    @GetMapping
    public ResponseEntity getOrdensServicos() {
        if (servicoFilaObj.isEmpty()) {
            return ResponseEntity.status(204).body("Lista de ordens de serviços vazia!");
        } else {
            return ResponseEntity.status(200).body(servicoFilaObj.peekAll());
        }
    }

    // GET - Buscar ordem por ID
    @GetMapping("/{id}")
    public ResponseEntity getOrdemServico(@PathVariable Integer idOrdem) {

    }
}
