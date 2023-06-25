/* Logic */
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { opacify } from "polished";

/* Components */
import { FontText } from "../../utils";

const { width } = Dimensions.get("window");

const Container = styled.View`
  width: ${width * 0.9}px;
  margin: 0px ${width * 0.05}px;
  margin-bottom: 16px;
  border-radius: 16px;
  overflow: hidden;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: ${width * 0.4}px;
  height: 200px;
`;

const TextContainer = styled.View`
  height: 200px;
  padding: 16px;
  background-color: hsl(240, 50%, 7%);

  flex: 1;
  justify-content: space-between;
`;

const Title = styled(FontText)``;

const Date = styled(FontText)`
  font-size: 12px;
  color: ${({ theme }) => opacify(-0.15, theme.colors.light)};
`;

const Center = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Gap = styled.View`
  gap: 16px;
`;

export { Container, Image, TextContainer, Title, Date, Center, Gap };
