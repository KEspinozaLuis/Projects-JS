document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('#lista-carrito tbody');
    const listCourses = document.querySelector('#lista-cursos');
    const emptyCart = document.querySelector('#vaciar-carrito');
    let listCart = [];

    const loadEventListenners = () => {
        //Add product to cart
        listCourses.addEventListener('click', captureData);
        //Delete product
        cart.addEventListener('click', deleteCourse);
        //Vaciar carrito
        emptyCart.addEventListener('click', emptyAllCart);
       
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

        //Add Quantity si existe el producto en el carrito
        const indexItem = listCart.findIndex(item => item.id === product.id);
        if(indexItem !== -1){
            listCart[indexItem].quantity += 1;
        } else{
            listCart = [...listCart, product];
        }
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

   //Delete Course
   const deleteCourse = (event) => {
        event.preventDefault();
        const idCourse = event.target.getAttribute('data-id');
        listCart = listCart.filter(item => item.id !== idCourse);
        createHtmlProduct();
   }

   //Vaciar carrito
   const emptyAllCart = () => {
        listCart = [];
        createHtmlProduct();
   }

    loadEventListenners();

})
