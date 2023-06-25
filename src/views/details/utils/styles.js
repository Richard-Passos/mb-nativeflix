/* Logic */
import styled from "styled-components/native";
import { opacify } from "polished";

/* Components */
import { FontText } from "../../../utils";

const Container = styled.View`
  width: 125px;
  height: 150px;
  margin: 0px 8px;
  margin-bottom: 16px;
  padding: 20px;
  border-radius: 16px;
  overflow: hidden;

  position: relative;

  justify-content: space-between;
`;

const Blur = styled.View`
  width: 125px;
  height: 150px;
  background-color: ${({ theme }) => opacify(-0.9, theme.colors.light)};
  filter: blur(24px);

  position: absolute;
`;

const Title = styled(FontText)`
  font-size: 11px;
  color: ${({ theme }) => opacify(-0.3, theme.colors.text)};
`;

const Info = styled(FontText)`
  font-weight: bold;
`;

export { Container, Blur, Title, Info };
