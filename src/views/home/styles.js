/* Logic */
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { opacify } from "polished";

/* Components */
import { Button as Btn } from "../../components";
import { FontText } from "../../utils";

const { width } = Dimensions.get("window");

const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.bg};
`;

const Types = styled.View`
  padding-top: 16px;
  padding-bottom: 24px;

  flex-direction: row;
  justify-content: space-evenly;
`;

const Button = styled(Btn)`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.priText};
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "transparent"};
  border-radius: 0px;
`;

const Title = styled(FontText)`
  margin-left: 16px;
  font-size: ${({ theme }) => theme.sizes.lg}px;
  font-weight: bold;
`;

const ViewAll = styled.View`
  width: ${width * 0.35}px;
  height: 200px;
  margin-left: 16px;
  background-color: ${({ theme }) => opacify(-0.9, theme.colors.opstTheme)};
  border-radius: ${({ theme }) => theme.sizes.xl}px;

  overflow: hidden;
  bottom: 16px;

  justify-self: flex-end;
  justify-content: center;
  align-items: center;
`;

export { Container, Types, Button, Title, ViewAll };
