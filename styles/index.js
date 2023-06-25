/* Logic */
import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.themeDarker};

  flex: 1;
  display: flex;
  flex-direction: column;
`;

export { Container };
