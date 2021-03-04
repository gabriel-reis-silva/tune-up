package com.bandtec.tuneup.br.ecs;

public class FuncionarioOficina extends Cliente{
    private int nivelAcesso;

    public FuncionarioOficina(int id, String nome, String dataNasc, String email, String telefone, String senha, String cpf, int nivelAcesso) {
        super(id, nome, dataNasc, email, telefone, senha, cpf);
        this.nivelAcesso = nivelAcesso;
    }
}
