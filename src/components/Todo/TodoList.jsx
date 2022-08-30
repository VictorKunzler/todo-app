import { useContext } from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";
import { TodoContext } from "../../providers/Todo";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <List>
      {
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })
      }
    </List>
  );
};

export default TodoList;
