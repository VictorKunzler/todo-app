import styled from 'styled-components';

import { Title } from '../../styledComponents';
import Todo from '../../components/Todo/Todo';

const MainContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  min-width: 100vw;
  padding: 1rem;
  text-align: center;
  box-sizing: border-box;
`;

function Main() {
  return (
    <MainContainer>
      <Title>
        to do
      </Title>
      <Todo></Todo>
    </MainContainer>
  );
}

export default Main;
