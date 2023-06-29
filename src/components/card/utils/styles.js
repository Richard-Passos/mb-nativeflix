import styled from "styled-components/native";
import { FontText } from "../../../utils";

const Container = styled.View`
  height: 175px;

  padding: 16px;

  flex: 1;
  gap: 16px;
`;

const Title = styled(FontText)``;

const Text = styled(FontText)`
  color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.sizes.sm}px;
`;

const Center = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Gap = styled.View`
  gap: 8px;
`;

const BG = styled.View`
  width: 100%;
  height: 175px;

  border-radius: ${({ theme }) => theme.sizes.md}px;

  background-color: ${({ theme }) => theme.colors.theme};

  position: absolute;
  z-index: -10;
`;

export { Container, Title, Text, Center, Gap, BG };
