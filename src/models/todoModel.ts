export class TodoModel {
    constructor(
        public description : string,
        public isDone : boolean = false,
        public isImportant : boolean = false
    ){

    }
    public static clone(todo : TodoModel){
        return new TodoModel(todo.description,todo.isDone, todo.isImportant);
    }
}