class Tarefa{
    private _descricao:string;
    private data:Date;
    private concluido:boolean;
    constructor(descricao: string , data:Date){
        this._descricao = descricao;
        this.data = data;
        this.concluido = false;
    }

    get descricao(){
        return this._descricao;
    }
}

