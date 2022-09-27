import { useContext } from 'react';
import { useState } from 'react';
import { MinusCircle } from 'phosphor-react';
import styled from 'styled-components';

import { TodoContext } from '../../providers/Todo';

const TodoItemContainer = styled.li`
  width: 100%;
`;

const TodoItemValue = styled.div`
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  color: #4d4d4d;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  display: flex;
  align-items: center;
  place-content: space-between;
`;

const TodoItemInput = styled.input`
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  color: #4d4d4d;
  background: #FFF;

  &:focus-visible {
    outline: 0;
  }
`;

const MinusCircleIcon = styled(MinusCircle) `
  display: none;
  color: #C94613;
  cursor: pointer;

  ${TodoItemValue}:hover & {
    display: block
  }
`;

const TodoItem = ({
  todo
}) => {
  const { updateTodoText, deleteTodoItem } = useContext(TodoContext);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.text);


  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const toogleEdit = () => {
    setEdit(!edit);
  };

  const handleBlur = () => {
    updateTodoText({id: todo.id, newText: value });
    toogleEdit();
  };

  const handleDelete = () => {
    deleteTodoItem(todo.id);
  };

  return (
    <TodoItemContainer>
      {
        edit ? (
          <TodoItemInput
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <TodoItemValue
            onDoubleClick={toogleEdit}
          >
            {value}
            <MinusCircleIcon
              size={22}
              onClick={handleDelete}
            />
          </TodoItemValue>
        )
      }
    </TodoItemContainer>
  );
};

export default TodoItem;
