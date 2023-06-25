/* Logic */
import { Dimensions } from "react-native";
import styled from "styled-components/native";

/* Components */
import { Button as Btn, Link } from "../../components";
import { FontText } from "../../utils";

const { width } = Dimensions.get("window");

const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.themeDarker};
`;

const Types = styled.View`
  padding-top: 16px;
  padding-bottom: 24px;

  flex-direction: row;
  justify-content: space-evenly;
`;

const Button = styled(Btn)`
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "transparent"};
  border-radius: 0px;
`;

const Title = styled(FontText)`
  margin-left: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const ViewAll = styled(Link)`
  width: 150px;
  margin-top: 85px;
  margin-right: ${width * 0.05}px;
  font-weight: bold;

  text-align: center;
`;

export { Container, Types, Button, Title, ViewAll };
