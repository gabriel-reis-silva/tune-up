package com.bandtec.tuneup.br.ecs;

public abstract class Cliente {
    private Integer id;
    private String nome, dataNasc, email, telefone, senha, cpf;

    public Cliente(int id, String nome, String dataNasc, String email, String telefone, String senha, String cpf) {
        this.id = id;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.cpf = cpf;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDataNasc() {
        return dataNasc;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getSenha() {
        return senha;
    }

    public String getCpf() {
        return cpf;
    }
}