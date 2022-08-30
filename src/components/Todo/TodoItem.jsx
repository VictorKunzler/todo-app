import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { TodoContext } from "../../providers/Todo";

const TodoItemContainer = styled.li`
  width: 100%;
`

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
`

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
`

const TodoItem = ({
  todo
}) => {
  const { updateTodoText } = useContext(TodoContext);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.text);


  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const toogleEdit = () => {
    setEdit(!edit);
  }

  const handleBlur = () => {
    updateTodoText({id: todo.id, newText: value });
    toogleEdit();
  }

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
          </TodoItemValue>
        )
      }
    </TodoItemContainer>
  );
};

export default TodoItem;
