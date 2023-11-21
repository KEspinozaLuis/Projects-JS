const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
const task = document.querySelector("#task");
const form = document.querySelector("#form");
const listTasks = document.querySelector("#listTasks")
const taskName = document.querySelector("#time #taskName");

form.addEventListener("submit", event => {
    event.preventDefault();
    if(task.value !== ""){
        createTask(task.value);
        task.value = "";
        renderTasks();
    }
})

const createTask = (value) =>{
    const newTask = {
        id: (Math.random()*100).toString(36).slice(3),
        title: value,
        completed: false
    }
    tasks.unshift(newTask);
}

const renderTasks = () => {
    const html = tasks.map(task =>{
        return `
            <div class="task">
                ${task.completed ? `<span class="done">Done</span>` : `<button class="start-button" data-id="${task.id}">Start</button>`}
                <div class="title">${task.title}</div>
            </div>
        `;
    })

    const listTasks = document.querySelector("#listTasks");
    listTasks.innerHTML = html.join('');

    const startButtons = document.querySelectorAll(".task .start-button");
    startButtons.forEach(button => {
        button.addEventListener("click", event =>{
            event.preventDefault();
            if(!timer){
                const id = button.getAttribute("data-id");
                startButtonHandler(id);
                button.textContent = "In progress..."
            }
        })
    })
}


const startButtonHandler = (id) =>{
    time = 5;
    current = id;
    const taskIndex = tasks.findIndex(task => task.id === id);
    taskName.textContent = tasks[taskIndex].title;

    timer = setInterval(()=> {
        timeHandler(id);
    }, 1000)
}

const timeHandler = (id) => {
    time--;
    renderTime();

    if(time === 0){
        clearInterval(timer);
        markCompleted(id);
        timer = null;
        renderTasks();
        startBreak();
    }
}

const renderTime = () => {
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? "0": ""}${minutes}:${seconds <10 ? "0":""}${seconds}`;
}

const markCompleted = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = true;
}

const timerBreakHandler = () => {
    time--;
    renderTime();

    if(time === 0){
        clearInterval(timerBreak);
        current = null;
        timerBreak = null;
        taskName.textContent = "";
        renderTasks();
    }
}

const startBreak = () => {
    time = 3;
    taskName.textContent = "Break";
    timerBreak = setInterval(()=>{
        timerBreakHandler();
    }, 1000)
}

renderTime();
renderTasks();