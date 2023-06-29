import styled from "styled-components/native";

const paddingTop = 16;

const Container = styled.ScrollView`
  padding-top: ${paddingTop}px;

  background-color: ${({ theme }) => theme.colors.bg};
`;

const Gap = styled.View`
  gap: 28px;
`;

const SpaceOnBottomPage = styled.View`
  height: ${paddingTop * 2}px;
`;

export { Container, Gap, SpaceOnBottomPage };
