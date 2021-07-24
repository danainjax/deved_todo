//selectors
const todoInput = document.querySelector('.todo-input');
console.log(todoInput);
const todoButton = document.querySelector('.todo-button')
console.log(todoButton)
const todoList = document.querySelector('.todo-list')
console.log(todoList)





//Event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);




//functions
function addTodo (event) {
    event.preventDefault();
     console.log('clicked the button')
     const todoDiv = document.createElement('div')
     //Todo Div
     todoDiv.classList.add('todo')
     //create LI
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
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
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     //append to list
    todoList.appendChild(todoDiv);
     todoInput.value = " "
 }

 function deleteCheck(e) {
     console.log(e.target);
     const item = e.target;
     //delete todo
     console.log(item.classList[0])
     if (item.classList[0] === 'trash-btn') {
         const todo = item.parentElement;
         todo.classList.add("fall")
         todo.addEventListener('transitionend', function() {
            todo.remove();
         })
        
     }
     if (item.classList[0] === 'complete-btn'){
        //  console.log('check off the item')
        //  const trashB = item.nextElementSibling;
        //  console.log(trashB)
        //  trashB.remove();
        const todo = item.parentElement;
        todo.classList.toggle("completed");
     }
 }