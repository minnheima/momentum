const $toDoForm = document.getElementById("todo-form");
const $toDoInput = document.querySelector("#todo-form input");
const $toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
  const $li = e.target.parentElement;
  // console.log($li.id);
  $li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt($li.id));

  // todo-list에 내용이 없을 때 배경컬러 없애기
  if(toDos.length === 0){ 
    $toDoList.classList.remove('active');
  }
  saveToDos(); // 다시 저장
}


function paintTodo(newTodo){
  const $li = document.createElement('li');
  $li.id = newTodo.id;
  $toDoList.classList.add('active');
  const $span = document.createElement('span');
  $span.innerText = newTodo.text;
  const $button = document.createElement('button');

  $button.innerText = "X";
  $button.addEventListener('click', deleteTodo);
  $li.appendChild($span);
  $li.appendChild($button);
  $toDoList.appendChild($li);
  
}



function handleTodoSubmit(e){
  e.preventDefault();
  const newTodo = $toDoInput.value;
  $toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

$toDoForm.addEventListener('submit', handleTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}


