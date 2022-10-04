import { createContext, useCallback, useMemo, useState } from 'react';
import TodoService from '../services/Todo';

export const TodoContext = createContext({});

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState(TodoService.getTodos());
  
  const todosActive = todos.filter(todo => !todo.completed);

  const todosCompleted = todos.filter(todo => todo.completed);

  const addTodo = useCallback(text => {
    setTodos(TodoService.addTodo(text));
  }, [setTodos]);

  const updateTodoText = useCallback(({ id, newText }) => {
    setTodos(TodoService.updateTodoText({ id, newText }));
  }, [setTodos]);

  const updateTodoCompleted = useCallback(({ id, isCompleted }) => {
    setTodos(TodoService.updateTodoCompleted({ id, isCompleted }));
  }, [setTodos]);

  const deleteTodoItem = useCallback((id) => {
    setTodos(TodoService.deleteTodoItem(id));
  }, [setTodos]);

  const deleteCompleted = useCallback(() => {
    setTodos(TodoService.deleteCompleted());
  }, [setTodos]);

  const providerInitialValue = useMemo(
    () => ({
      todos,
      todosActive,
      todosCompleted,
      updateTodoText,
      addTodo,
      deleteTodoItem,
      deleteCompleted,
      updateTodoCompleted
    }),
    [todos, updateTodoText, addTodo, deleteTodoItem]
  );

  return (
    <TodoContext.Provider
      value={providerInitialValue}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

