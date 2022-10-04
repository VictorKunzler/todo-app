import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { TodoListActive, TodoListAll, TodoListCompleted } from './TodoList';
import TodoHeader from './TodoHeader';
import { TodoProvider } from '../../providers/Todo';
import TodoFooter from './TodoFooter';

const TodoContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  max-width: 500px;
  border-radius: 3px;
  margin: 0 auto;
`;

const Todo = () => {
  const { pathname } = useLocation();

  return (
    <TodoProvider>
      <TodoContainer>
        <TodoHeader />

        {
          pathname === '/' && <TodoListAll />
        }

        {
          pathname === '/active' && <TodoListActive />
        }

        {
          pathname === '/completed' && <TodoListCompleted />
        }

        <TodoFooter path={pathname}/>
      </TodoContainer>
    </TodoProvider>
  );
};

export default Todo;
