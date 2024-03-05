export default class Model {
    constructor(){
        this.view = null;
        this.toDos = [];
    }

    setView(view){
        this.view = view;
    }

    getToDos(){
        return this.toDos;
    }

    addToDo(title, description){
        console.log(title, description);
    }
}