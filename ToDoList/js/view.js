export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        const btnAdd = document.getElementById('add');
        btnAdd.onclick = () =>this.addToDo('Titulo', 'Desc');
    }

    setModel(model){
        this.model = model;
    }

    addToDo(title, description){
        console.log(title, description)
    }
}