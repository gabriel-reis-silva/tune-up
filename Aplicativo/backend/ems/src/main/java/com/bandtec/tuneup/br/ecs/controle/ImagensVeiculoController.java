package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.ImagensVeiculo;
import com.bandtec.tuneup.br.ecs.dominio.OrdemServico;
import com.bandtec.tuneup.br.ecs.repositorio.ImagensVeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/images")
public class ImagensVeiculoController {

    @Autowired
    private ImagensVeiculoRepository imagensVeiculoRepository;

    @PostMapping("/{id}")
    public ResponseEntity postImage(@PathVariable Integer id, @RequestParam MultipartFile novaImagem)
            throws IOException {
        ImagensVeiculo veiculo = new ImagensVeiculo();
        OrdemServico ordemServico = new OrdemServico();

        ordemServico.setId(id);
        byte[] image = novaImagem.getBytes();

        Path path = Paths.get(novaImagem.getOriginalFilename());

        Files.write(path, image);
        veiculo.setImage(image);
        veiculo.setOrdemServico(ordemServico);

        imagensVeiculoRepository.save(veiculo);

        return ResponseEntity.status(201).build();
    }


    @GetMapping("/{id}")
    public ResponseEntity getImage(@PathVariable Integer id) {
        List<ImagensVeiculo> listImage = imagensVeiculoRepository.findByOrdemServicoId(id);

        if (!listImage.isEmpty()) {
            byte[] imageVeiculo = listImage.get(0).getImage();
            return ResponseEntity.status(200).header("content-type", "image/jpeg").body(imageVeiculo);
        }
        return ResponseEntity.status(404).build();
    }
}
