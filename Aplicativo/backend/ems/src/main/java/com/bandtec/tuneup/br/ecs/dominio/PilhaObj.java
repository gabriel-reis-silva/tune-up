package com.bandtec.tuneup.br.ecs.dominio;

public class PilhaObj <T>{

    private int topo;
    private T[] pilha;

    public PilhaObj(int capacidade) {
        this.pilha = (T[]) new Object[capacidade];
        this.topo = -1;
    }

    public boolean isEmpty() {
        return topo == -1;
    }

    public boolean isFull() {
        return topo == pilha.length - 1;
    }

    public void push(T inform) {
        if (isFull()) {
            System.out.println("Pilha Cheia");
        } else {
            pilha[++topo] = inform;
        }
    }

    public T pop() {
        if (isEmpty()) {
            return null;
        } else {
            return pilha[topo--];
        }
    }

    public T peek() {
        if (isEmpty()) {
            return null;
        } else {
            return pilha[topo];
        }
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("Pilha Vazia");
        } else {
            for (int i = (pilha.length - 1); i >= 0; i--) {
                System.out.println(pilha[i]);
            }
        }
    }
}
