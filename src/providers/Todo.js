import { createContext, useCallback, useMemo, useState } from 'react';
import TodoService from '../services/Todo';

export const TodoContext = createContext({});

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState(TodoService.getTodos());

  const addTodo = useCallback(text => {
    setTodos(TodoService.addTodo(text));
  }, [setTodos]);

  const updateTodoText = useCallback(({ id, newText }) => {
    setTodos(TodoService.updateTodoText({ id, newText }));
  }, [setTodos]);

  const deleteTodoItem = useCallback((id) => {
    setTodos(TodoService.deleteTodoItem(id));
  }, [setTodos]);

  const providerInitialValue = useMemo(
    () => ({
      todos,
      updateTodoText,
      addTodo,
      deleteTodoItem
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

