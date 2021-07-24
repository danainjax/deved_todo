//selectors
const todoInput = document.querySelector('.todo-input');
console.log(todoInput);
const todoButton = document.querySelector('.todo-button')
console.log(todoButton)
const todoList = document.querySelector('.todo-list')
console.log(todoList)





//Event listeners
todoButton.addEventListener('click', addTodo)



//functions
function addTodo (event) {
    event.preventDefault();
     console.log('clicked the button')
     const todoDiv = document.createElement('div')
     //create Div
     todoDiv.classList.add('todo')
     //create LI
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     console.log(newTodo)
     newTodo.classList.add('todo-item');
   
     todoDiv.appendChild(newTodo);
     //check mark button
     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check"></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton)
     //trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("complete-btn");
     todoDiv.appendChild(trashButton);
     //append to list
    todoList.appendChild(todoDiv);
     todoInput.value = " "
 }