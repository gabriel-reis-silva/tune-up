package com.bandtec.tuneup.br.ecs.dominio;

public class FilaObj <T> {

    int tamanho;
    int inicio;
    int fim;

    private T[] filaServicos;

    public FilaObj(int capacidade) {
        filaServicos = (T[]) new String[capacidade];
        tamanho = 0;
        inicio = 0;
        fim = 0;
    }

    public boolean isEmpty() {
        return tamanho == 0;
    }

    public boolean isFull() {
        return tamanho == filaServicos.length;
    }

    public void insertFila(T info) {
        if (!isFull()) {
            filaServicos[fim] = info;
            fim++;
            fim = fim % filaServicos.length;

            tamanho++;
        }
        else {
            System.out.println("Fila cheia!");
        }
    }

    public T peek() {
        return filaServicos[inicio];
    }

    public T poll() {
        T primeiro = peek();

        if (!isEmpty()) {
            filaServicos[inicio] = null;
            inicio++;
            inicio = inicio % filaServicos.length;

            tamanho--;
        }
        return primeiro;
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("Fila Vazia");
        }
        else {
            for (int i = inicio, cont = 0; cont < tamanho; i = (i+1) % filaServicos.length, cont++) {
                System.out.println(filaServicos[i]);
            }
        }
    }
}

