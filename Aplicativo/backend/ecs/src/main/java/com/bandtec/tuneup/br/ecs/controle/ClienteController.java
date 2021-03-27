package com.bandtec.tuneup.br.ecs.controle;

import com.bandtec.tuneup.br.ecs.dominio.Cliente;
import com.bandtec.tuneup.br.ecs.dominio.Proprietario;
import com.bandtec.tuneup.br.ecs.dominio.UsuarioOficina;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    private List<Cliente> clientes;
    private List<Cliente> clientesLogados = new ArrayList<Cliente>();

    public ClienteController(List<Cliente> clientes) {
        this.clientes = new ArrayList<Cliente>();
    }

    @GetMapping("/")
    public List<Cliente> getClientes() {
        return clientes;
    }

    /* LOGIN */
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