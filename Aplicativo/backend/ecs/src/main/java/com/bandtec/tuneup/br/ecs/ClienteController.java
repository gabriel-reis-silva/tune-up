package com.bandtec.tuneup.br.ecs;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class ClienteController {
    private List<Cliente> clientes;
    private List<Cliente> clientesLogados;

    public ClienteController(List<Cliente> clientes) {
        this.clientes = clientes;
    }

    @GetMapping("/")
    public List<Cliente> getClientes() {
        return clientes;
    }

    @GetMapping("/funcionario/{email}/{senha}")
    public String loginFuncionario(@PathVariable String email, @PathVariable String senha) {
        String msg = "";
        for (Cliente c : clientes) {
            if (c.getEmail().equals(email) && c.getSenha().equals(senha)) {
                msg = "Funcionario " + c.getNome() + " logado com sucesso!";
            } else {
                msg = "Funcionario não cadastrado";
            }
        }
        return msg;
    }

    @GetMapping("/usuario-oficina/{email}/{senha}")
    public String loginUsuario(@PathVariable String email, @PathVariable String senha) {
        String msg = "";
        for (Cliente c : clientes) {
            if (c.getEmail().equals(email) && c.getSenha().equals(senha)) {
                msg = "Usuário " + c.getNome() + " logado com sucesso!";
            } else {
                msg = "Usuário não cadastrado";
            }
        }
        return msg;
    }

    @PostMapping("/funcionario")
    public String addFuncionario(@RequestBody FuncionarioOficina funcionario) {
        clientes.add(funcionario);
        return "Funcionario cadastrado com sucesso";
    }

    @PostMapping("/usuario-oficina")
    public String addUsuario(@RequestBody UsuarioOficina usuario) {
        clientes.add(usuario);
        return "Usuário cadastrado com sucesso";
    }

}
