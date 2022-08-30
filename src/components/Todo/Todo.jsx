import styled from "styled-components";
import { Link } from "react-router-dom";

import TodoClearCompleted from "./TodoClearCompleted";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import { TodoProvider } from "../../providers/Todo";

const TodoContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  max-width: 500px;
  border-radius: 3px;
  margin: 0 auto;
`

const TodoFooter = styled.div`
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
`

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
`

const TodoLinksItem = styled.li`
  border-radius: 3px;
  border: ${({ active }) => (active ? '2px #ababab' : '1px #e6e6e6')} solid;
  padding: 3px 7px;
`

const Todo = () => {
  return (
    <TodoProvider>
      <TodoContainer>
        <TodoHeader />

        <TodoList />

        <TodoFooter>
          <span>0 items left</span>
          <TodoLinks>
            <TodoLinksItem active>
              <Link to="/">All</Link>
            </TodoLinksItem>
            <TodoLinksItem>
              <Link to="/active">Active</Link>
            </TodoLinksItem>
            <TodoLinksItem>
              <Link to="/completed">Completed</Link>
            </TodoLinksItem>
          </TodoLinks>
          <TodoClearCompleted />
        </TodoFooter>
      </TodoContainer>
    </TodoProvider>
  );
};

export default Todo;
