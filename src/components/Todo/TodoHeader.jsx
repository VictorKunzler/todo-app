import { useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../providers/Todo';

const TodoHeaderInput = styled.input`
  font-size: 2rem;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  color: #4d4d4d;

  &:focus-visible {
    outline: 0;
  }

  &::placeholder {
    font-size: 1.8rem;
    color: #4d4d4d80;
  }
`;

const TodoHeader = () => {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  const handleKeyDown = event => {
    if(event.key === 'Enter') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <TodoHeaderInput
      value={value}
      type="text"
      placeholder="What needs to be done?"
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoHeader;
