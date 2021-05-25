package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Cliente;
import com.bandtec.tuneup.br.ecs.dominio.ListaObj;
import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import com.bandtec.tuneup.br.ecs.repositorio.UsuarioOficinaRepository;
import com.bandtec.tuneup.br.ecs.repositorio.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.validation.Valid;
import java.io.*;
import java.util.*;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;

@CrossOrigin
@RestController
@RequestMapping("/usuarios")
public class UsuarioOficinaController {
    public UsuarioOficina usuarioLogin1;
    @Autowired
    public VeiculoRepository veiculoRepository;

    private ListaObj<UsuarioOficina> usuarioCadastrado = new ListaObj<UsuarioOficina>(10);
    FileReader teste = null;

    public static void gravaLista(ListaObj<UsuarioOficina> lista, boolean isCSV, String nomeArquivo) {

        FileWriter arq = null;
        Formatter saida = null;
        boolean deuErro = false;


        if (isCSV) {
            nomeArquivo += ".csv";
        } else {
            nomeArquivo += ".txt";
        }

        try {
            arq = new FileWriter(nomeArquivo, true);
            saida = new Formatter(arq);
        } catch (IOException erro) {
            System.err.println("Erro ao abrir arquivo");
            System.exit(1);
        }

        try {
            for (int i = 0; i < lista.getTamanho(); i++) {
                UsuarioOficina u = lista.getElemento(i);

                if (isCSV) {
                    saida.format("%d;%s;%s;%s;%s;%s;",
                            u.getId(), u.getNome(), u.getDataNasc(),
                            u.getEmail(), u.getTelefone(),
                            u.getCpf());
                } else {
                    saida.format("%d;%s;%s;%s;%s;%s;",
                            u.getId(), u.getNome(), u.getDataNasc(),
                            u.getEmail(), u.getTelefone(),
                            u.getCpf());
                }
            }
        } catch (FormatterClosedException erro) {
            System.err.println("Erro ao gravar no arquivo");
            deuErro = true;
        } finally {
            saida.close();
            try {
                arq.close();
            } catch (IOException erro) {
                System.err.println("Erro ao fechar arquivo.");
                deuErro = true;
            }
            if (deuErro) {
                System.exit(1);
            }
        }
    }

    public static void gravaRegistro(String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            // o argumento true é para indicar que o arquivo não será sobrescrito e sim
            // gravado com append (no final do arquivo)
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }

    public void geraRegistro(ListaObj<UsuarioOficina> lista) {
        String nomeArq = "usuario-veiculo.txt";
        String header = "";
        String corpo = "";
        String trailer = "";
        int contRegDados = 0;

        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        if (repository.findAll().size() > 0) {
            header += "00USUARIO2021";
            header += formatter.format(dataDeHoje);
            header += "01";
            gravaRegistro(nomeArq, header);
            for (int i = 1; i <= repository.findAll().size(); i++) {


                corpo += "02";
                corpo += String.format("%-2s", repository.findById(i).get().getId());
                corpo += String.format("%-30s", repository.findById(i).get().getNome());
                corpo += String.format("%-8s", repository.findById(i).get().getDataNasc());
                corpo += String.format("%-20s", repository.findById(i).get().getEmail());
                corpo += String.format("%-9s", repository.findById(i).get().getTelefone());
                corpo += String.format("%-15s", repository.findById(i).get().getCpf());

            }
        } else {
            System.out.println("Lista vazia");
        }
        for (int i2 = 1; i2 <= veiculoRepository.findAll().size(); i2++) {
            corpo += "03";
            corpo += String.format("%-2s", veiculoRepository.findById(i2).get().getId());
            corpo += String.format("%-20s", veiculoRepository.findById(i2).get().getMarca());
            corpo += String.format("%-15s", veiculoRepository.findById(i2).get().getModelo());
            corpo += String.format("%-10s",veiculoRepository.findById(i2).get().getCor());
            corpo += String.format("%-7s", veiculoRepository.findById(i2).get().getPlaca());
            corpo += String.format("%-4d", veiculoRepository.findById(i2).get().getAno());
            contRegDados++;
        }
        contRegDados++;
        gravaRegistro(nomeArq, corpo);

        // monta o trailer
        trailer += "01";
        trailer += String.format("%010d", contRegDados);
        gravaRegistro(nomeArq, trailer);
    }

    @Autowired
    public UsuarioOficinaRepository repository;

    List<UsuarioOficina> usuarios;
    List<UsuarioOficina> logados;

    @PostMapping
    public ResponseEntity postUsuario(@RequestBody @Valid UsuarioOficina novoUsuario) {
        repository.save(novoUsuario);
        usuarioCadastrado.adiciona(novoUsuario);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getUsuarios() {
        usuarios = repository.findAll();
        if (usuarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        if (usuarioCadastrado.getTamanho() == 0) {
            System.out.println("\nLista vazia");
        } else {
            usuarioCadastrado.exibe();
        }
        return ResponseEntity.status(200).body(usuarios);
    }

    @PostMapping("/login")
    public ResponseEntity loginUsuario(@RequestBody UsuarioOficina usuarioLogin) {
        usuarioLogin1 = repository.findByEmailAndSenha(usuarioLogin.getEmail(), usuarioLogin.getSenha());
        if (usuarioLogin1 != null) {
            Cliente.sessao = usuarioLogin1.getId();
            usuarioLogin1.setLogado(true);
            repository.save(usuarioLogin1);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.badRequest().body("erro no login");
        }
    }

    @GetMapping("/usuario")
    public ResponseEntity getUser() {
        if (Cliente.sessao != null) {
            return ResponseEntity.status(200).body(repository.findById(Cliente.sessao));
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
        UsuarioOficina usuarioLogout = repository.findByEmailAndSenha(email, senha);
        if (usuarioLogout == null) {
            return ResponseEntity.status(401).build();
        } else {
            Cliente.sessao = null;
            usuarioLogout.setLogado(false);
            repository.save(usuarioLogout);
            return ResponseEntity.status(200).build();
        }
    }

    @DeleteMapping("/delete/{email}/{senha}")
    public ResponseEntity deleteUsuario(@PathVariable String email, @PathVariable String senha) {
        UsuarioOficina usuarioDelete = repository.findByEmailAndSenha(email, senha);
        if (usuarioDelete == null) {
            return ResponseEntity.status(401).build();
        } else {
            usuarioDelete.setLogado(false);
            repository.delete(usuarioDelete);
            for (int i = 0; i >= usuarioCadastrado.getTamanho(); i++) {
                if (usuarioCadastrado.getElemento(i) == usuarioDelete) {
                    usuarioCadastrado.removePeloIndice(i);
                    usuarioCadastrado.exibe();
                } else {
                    System.out.println("Usuário não encontrado :( ");
                }
            }
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/download")
    @ResponseBody
    public ResponseEntity geraCsv() {
        gravaLista(usuarioCadastrado, true, "usuario");
        Path path = Paths.get("usuario.csv");
        Resource resource = null;
        geraRegistro(usuarioCadastrado);
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @PutMapping("/alterar-dados/{id}")
    public ResponseEntity putUsuario(@PathVariable int id, @RequestBody UsuarioOficina usuarioAtributo) {
        Optional<UsuarioOficina> usuarioOficina = repository.findById(id);
        if (usuarioOficina.isPresent()) {
            if (usuarioAtributo.getNome() != null) {
                usuarioOficina.get().setNome(usuarioAtributo.getNome());
            }
            if (usuarioAtributo.getDataNasc() != null) {
                usuarioOficina.get().setDataNasc(usuarioAtributo.getDataNasc());
            }
            if (usuarioAtributo.getEmail() != null) {
                usuarioOficina.get().setEmail(usuarioAtributo.getEmail());
            }
            if (usuarioAtributo.getCpf() != null) {
                usuarioOficina.get().setCpf(usuarioAtributo.getCpf());
            }
            if (usuarioAtributo.getTelefone() != null) {
                usuarioOficina.get().setTelefone(usuarioAtributo.getTelefone());
            }
            if (usuarioAtributo.getSenha() != null) {
                usuarioOficina.get().setSenha(usuarioAtributo.getSenha());
            }
            repository.save(usuarioOficina.get());
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

}

