const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach( button => {
    button.addEventListener("click", ()=>{
        switch(button.id){
            case "clear":
                screen.textContent = "0";
                break;
            case "backspace":
                if(screen.textContent.length === 1 || screen.textContent === "Error!"){
                    screen.textContent = "0";
                }else{
                    screen.textContent = screen.textContent.slice(0, -1);
                }   
                break;
            case "equal":
                try {
                    screen.textContent = eval(screen.textContent);
                } catch{
                    screen.textContent = "Error!"
                }
                break;
            default:
                if(screen.textContent ==="0" || screen.textContent === "Error!"){
                    screen.textContent = button.textContent;
                }else{
                    screen.textContent += button.textContent;
                }
        }
    })
})



































// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//     button.onclick = () => {
//         switch(button.id){
//             case "clear":
//                 display.textContent = "";
//                 break;
//             case "backspace":
//                 let string = display.textContent.toString();
//                 display.textContent = string.substring(0, string.length-1);
//                 break;
//             case "equal":
//                 if(display.textContent !==""){
//                     display.textContent = eval(display.textContent);
//                 }else{
//                     display.textContent = "Ingrese un valor";
//                     setTimeout(()=> {
//                         display.textContent = ""
//                     }, 2000);
//                 }
//                 break;
//             default:
//                 display.textContent += button.id;

//         }
//     }
// })