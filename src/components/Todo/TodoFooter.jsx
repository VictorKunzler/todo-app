import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TodoClearCompleted from './TodoClearCompleted';
import { useContext } from 'react';
import { TodoContext } from '../../providers/Todo';

const FooterContainer = styled.div`
  text-align: left;
  padding: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4d4d4dd1;
  background-color: #ffffffc4;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;

  > * {
    align-self: center;
  }
`;

const TodoLinks = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  list-style-type: none;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const TodoLinksItem = styled.li`
  border-radius: 3px;
  border: ${({ active }) => (active ? '2px #ababab' : '1px #e6e6e6')} solid;
  padding: 3px 7px;
`;

const TodoFooter = ({ path }) => {
  const { todosActive } = useContext(TodoContext);

  return (
    <FooterContainer>
      <span>{todosActive.length} items left</span>
      <TodoLinks>
        <TodoLinksItem active={path === '/'}>
          <Link to="/">All</Link>
        </TodoLinksItem>
        <TodoLinksItem active={path === '/active'}>
          <Link to="/active">Active</Link>
        </TodoLinksItem>
        <TodoLinksItem active={path === '/completed'}>
          <Link to="/completed">Completed</Link>
        </TodoLinksItem>
      </TodoLinks>
      <TodoClearCompleted />
    </FooterContainer>
  );
};

export default TodoFooter;
