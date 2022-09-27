import TodoLib from './lib/Todo';

const getTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const addTodo = text => {
  const todos = getTodos();

  const todo = TodoLib.createTodo(text);

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));

  return todos;
};

const updateTodoText = ({ id, newText }) => {
  const todos = getTodos();

  let todosEdited = todos.map(todo => {
    let updatedTodo = todo;

    if(todo.id === id) updatedTodo = TodoLib.updateTodoText({ todo: updatedTodo, newText });

    return updatedTodo;
  });

  localStorage.setItem('todos', JSON.stringify(todosEdited));

  return todosEdited;
};

const deleteTodoItem = id => {
  const todos = getTodos();
  const todosEdited = TodoLib.deleteTodoItem({ id, todos });

  localStorage.setItem('todos', JSON.stringify(todosEdited));

  return todosEdited;
};

const TodoServiceLocalStorage = {
  addTodo,
  getTodos,
  updateTodoText,
  deleteTodoItem
};

export default TodoServiceLocalStorage;
