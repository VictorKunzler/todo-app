import { useContext } from 'react';
import styled from 'styled-components';

import { TodoContext } from '../../providers/Todo';

const ClearCompleted = styled.button`
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  padding: 3px 7px;
  cursor: pointer;
  font-size: 14px;
`;

const TodoClearCompleted = () => {
  const { deleteCompleted } = useContext(TodoContext);
  const handleOnClick = () => deleteCompleted();

  return (
    <ClearCompleted onClick={handleOnClick}>Clear completed</ClearCompleted>
  );
};

export default TodoClearCompleted;
