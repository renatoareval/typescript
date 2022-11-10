"use strict";
class Tarefa {
    constructor(descricao, data) {
        this._descricao = descricao;
        this.data = data;
        this.concluido = false;
    }
    get descricao() {
        return this._descricao;
    }
}
