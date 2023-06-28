import styled from "styled-components/native";
import { opacify } from "polished";

import { Button as Btn } from "../../components";

import { FontText, viewWidth } from "../../utils";

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

export { Container, Types, Button };
