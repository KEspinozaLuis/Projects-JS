import Model from "./model.js";
import View from "./view.js";

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);
    
    
    
    
    
    
    
    // const title = document.getElementById('title');
    // const description = document.getElementById('description');
    
    // const alert = document.getElementById('alert');
    
    // let id = 1;

    // //Eliminar tarea
    // const removeToDo = (id) => {
    //     document.getElementById(id).remove();
    // }
    // //Agregar tareas
    // const addToDo = () =>{
    //     if(!title.value || !description.value){
    //         alert.classList.remove('d-none');
    //         alert.innerText = "Title and description is required";
    //         return;
    //     }
    //     alert.classList.add('d-none');
    //     const row = table.insertRow();
    //     row.setAttribute('id', id++);
    //     row.innerHTML = `
    //         <td>${title.value}</td>
    //         <td>${description.value}</td>
    //         <td class="text-center">
    //             <input type="checkbox">
    //         </td>
    //         <td>
    //             <button class="btn btn-primary mb-1">
    //                 <i class="fa fa-pencil"></i>
    //             </button>
    //         </td>
    //     `;

    //     const btnRemove = document.createElement('button');
    //     btnRemove.classList.add('btn', 'btn-danger','mb-1','ml-1');
    //     btnRemove.innerHTML = '<i class="fa fa-trash"></i>';
    //     btnRemove.onclick = () => {
    //         removeToDo(row.getAttribute('id'));
    //     }
    //     row.children[3].appendChild(btnRemove);
    // }

    // btnAdd.onclick = addToDo;
})
