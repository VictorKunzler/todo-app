import { createContext, useCallback, useMemo, useState } from "react";
import TodoService from "../services/Todo";

export const TodoContext = createContext({});

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState(TodoService.getTodos());

  const addTodo = useCallback(text => {
    setTodos(TodoService.addTodo(text));
  }, [setTodos]);

  const updateTodoText = useCallback(({ id, newText }) => {
    setTodos(TodoService.updateTodoText({ id, newText }));
  }, [setTodos]);

  const providerInitialValue = useMemo(
    () => ({
      todos,
      updateTodoText,
      addTodo
    }),
    [todos, updateTodoText, addTodo]
  );

  return (
    <TodoContext.Provider
      value={providerInitialValue}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

