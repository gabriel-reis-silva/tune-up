package com.bandtec.tuneup.br.ecs.dominio;

import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Entity
public class Oficina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @NotNull
    @Size(min = 4, max = 60)
    private String nome;

    @NotNull
    @Size(min = 4, max = 60)
    private String razaoSocial;

    @NotNull
    private String iE;

    @CNPJ
    private String cnpj;

    @NotNull
    private int cep;

    @NotBlank
    @NotNull
    private String rua;

    @NotBlank
    @NotNull
    private String bairro;

    @NotBlank
    @NotNull
    private int numero;

    @NotBlank
    @NotNull
    private String complemento;

    @Pattern(regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})")
    @NotNull
    private String numEmpresarial;

    @Email
    private String emailEmpresarial;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getiE() {
        return iE;
    }

    public void setiE(String iE) {
        this.iE = iE;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getNumEmpresarial() {
        return numEmpresarial;
    }

    public void setNumEmpresarial(String numEmpresarial) {
        this.numEmpresarial = numEmpresarial;
    }

    public String getEmailEmpresarial() {
        return emailEmpresarial;
    }

    public void setEmailEmpresarial(String emailEmpresarial) {
        this.emailEmpresarial = emailEmpresarial;
    }
}
