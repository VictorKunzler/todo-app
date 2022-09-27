const createTodo = text => {
  return {
    text,
    id: Date.now(),
    completed: false
  };
};

const updateTodoText = ({ todo, newText }) => {
  todo.text = newText;
  return todo;
};

const deleteTodoItem = ({ id, todos }) => {
  return todos.filter(todo => todo.id !== id);
};

const TodoLib = {
  createTodo,
  updateTodoText,
  deleteTodoItem
};

export default TodoLib;
