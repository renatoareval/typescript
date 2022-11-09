"use strict";
class Tarefa {
    constructor(descricao, data) {
        this.descricao = descricao;
        this.data = data;
        this.concluido = false;
    }
}
const t1 = new Tarefa("comprar pão", new Date(2022 - 11 - 9));
console.log(t1);
