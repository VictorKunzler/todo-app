const createTodo = text => {
  return {
    text,
    id: Date.now(),
    completed: false
  }
}

const updateTodoText = ({ todo, newText }) => {
  todo.text = newText;
  return todo;
}

const TodoLib = {
  createTodo,
  updateTodoText
};

export default TodoLib;
