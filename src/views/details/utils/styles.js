/* Logic */
import styled from "styled-components/native";
import { opacify } from "polished";

/* Components */
import { FontText } from "../../../utils";

const Container = styled.View`
  width: 125px;
  height: 150px;
  margin: 0px 8px 16px;
  padding: 20px;
  background-color: ${({ theme }) => opacify(-0.9, theme.colors.opstTheme)};
  border-radius: ${({ theme }) => theme.sizes.md}px;

  justify-content: space-between;
`;

const Title = styled(FontText)`
  font-size: ${({ theme }) => theme.sizes.sm}px;
  color: ${({ theme }) => theme.colors.secText};
`;

const Info = styled(FontText)`
  font-weight: bold;
`;

const Gap = styled.View`
  gap: 4px;
`;

export { Container, Title, Info, Gap };
