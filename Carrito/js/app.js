document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('#lista-carrito tbody');
    const listCourses = document.querySelector('#lista-cursos');
    let listCart = [];

    const loadEventListenners = () => {
        //Add product to cart
        listCourses.addEventListener('click', captureData);
       
    }
    
    //Capture data course
    const captureData = (event) => {
        event.preventDefault();
        if(event.target.classList.contains('agregar-carrito')){
            const course = event.target.parentElement.parentElement;
            readData(course);
        }
       
    }

    //Read data
    const readData = (course) => {
        const product = {
            id: course.querySelector('.agregar-carrito').getAttribute('data-id'),
            image: course.querySelector('.imagen-curso').src,
            name: course.querySelector('h4').textContent,
            price: course.querySelector('.precio span').textContent,
            quantity: 1
        }
        listCart = [...listCart, product];
        createHtmlProduct();
    }

    //Create html
    const createHtmlProduct = () =>{
        //Clean cart
        cleanCart();

        //Recorremos carrito y creamos el html
        listCart.forEach( course => {
            const {id, image, name, price, quantity} = course;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${image}" width="200"/></td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
            `;
            cart.appendChild(tr);
        })
    }

   //Clean Cart
   const cleanCart = () => {
        while(cart.firstChild){
            cart.removeChild(cart.firstChild);
        }
   }

    loadEventListenners();

})
