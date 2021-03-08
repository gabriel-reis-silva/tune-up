package com.bandtec.tuneup.br.ecs;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class ClienteController {
    private List<Cliente> clientes = new ArrayList<Cliente>();
    private List<Cliente> clientesLogados = new ArrayList<Cliente>();

    public ClienteController(List<Cliente> clientes) {
        this.clientes = clientes;
    }
    @GetMapping("/")
    public List<Cliente> getClientes() {
        return clientes;
    }
    @GetMapping("/funcionario/{email}/{senha}")
    public String loginFuncionario(@PathVariable String email, @PathVariable String senha) {
        for (Cliente c: clientes) {
            if(c.getEmail().equals(email) && c.getSenha().equals(senha)) {
                clientesLogados.add(c);
                return "Funcionario "+ c.getNome() + " logado com sucesso!";
            }
        }
        return "Funcionario não cadastrado";
    }
    @GetMapping("/usuario-oficina/{email}/{senha}")
    public String loginUsuario(@PathVariable String email, @PathVariable String senha) {
        for (Cliente c: clientes) {
            if(c.getEmail().equals(email) && c.getSenha().equals(senha)) {
                clientesLogados.add(c);
                return "Usuário "+ c.getNome() + " logado com sucesso!";
            }
        }
        return "Usuário não cadastrado";
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
    @GetMapping("/logados")
    public List<Cliente> getLogados(){
        return clientesLogados;
    }

    @DeleteMapping("/{id}")
    public String logoffCliente(@PathVariable Integer id) {
        String res = "Usuário não logado";
        for (int i = 0; i < clientesLogados.size(); i++){
            if(clientesLogados.get(i).getId() == id) {
                res = "Funcionario deslogado com sucesso!";
                clientesLogados.remove(i);
            } else {
                i++;
            }
        }
        return res;
    }

}