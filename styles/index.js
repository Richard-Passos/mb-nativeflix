/* Logic */
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.bg};

  flex: 1;
  display: flex;
  flex-direction: column;
`;

export { Container };
