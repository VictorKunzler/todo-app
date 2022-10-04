import { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../providers/Todo';

import TodoItem from './TodoItem';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const TodoListAll = () => {
  const { todos } = useContext(TodoContext);
  return <TodoList todos={todos} />;
};

export const TodoListActive = () => {
  const { todosActive } = useContext(TodoContext);
  return <TodoList todos={todosActive} />;
};

export const TodoListCompleted = () => {
  const { todosCompleted } = useContext(TodoContext);
  return <TodoList todos={todosCompleted} />;
};

export const TodoList = ({ todos }) => {
  return (
    <List>
      {
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          );
        })
      }
    </List>
  );
};
