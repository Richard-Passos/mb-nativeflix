/* Logic */
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { opacify } from "polished";

/* Components */
import { FontText } from "../../utils";

const { width, height } = Dimensions.get("window");

const Hero = styled.ImageBackground`
  width: ${width}px;
  height: ${height * 0.45}px;
`;

const Container = styled.View`
  min-height: ${height * 0.68}px;
  margin-top: -${height * 0.1}px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.themeDarker};
  border-radius: 24px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  gap: 8px;
`;

const RatingContainer = styled.View`
  padding: 0px 16px;

  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

const Title = styled(FontText)`
  font-size: 24px;
  font-weight: bold;
`;

const Overview = styled(FontText)`
  color: ${({ theme }) => opacify(-0.25, theme.colors.text)};
  font-size: 12px;
  line-height: 18px;
`;

export { Hero, Container, RatingContainer, Title, Overview };
