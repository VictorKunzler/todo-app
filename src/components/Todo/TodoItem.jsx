import { useContext, useState } from 'react';
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
  position: relative;
  gap: 6px;
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

const TodoComplete = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.3rem;
  height: 1.3rem;
  border: 0.1rem solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #af2f2fa6;
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 1.4px;
    left: 1.3px;
  }

  :checked::before {
    transform: scale(1);
  }
`;

const MinusCircleIcon = styled(MinusCircle) `
  display: none;
  color: #C94613;
  cursor: pointer;
  position: absolute;
  right: 6px;

  ${TodoItemValue}:hover & {
    display: block
  }
`;

const TodoItem = ({
  todo
}) => {
  const { updateTodoText, deleteTodoItem, updateTodoCompleted } = useContext(TodoContext);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.text);
  
  const handleTodoCompleted = () => {
    const isCompleted = !todo.completed;
    updateTodoCompleted({id: todo.id, isCompleted});
  };

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
            <TodoComplete type='checkbox' checked={todo.completed} value={todo.completed} onChange={handleTodoCompleted}/>
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
