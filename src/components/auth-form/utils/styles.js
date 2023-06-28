import styled from "styled-components/native";
import MyButton from "../../button";
import { FontText } from "../../../utils";

const Buttons = styled.View`
  gap: 8px;
`;

const Button = styled(MyButton)`
  padding: 12px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Text = styled(FontText)`
  background-color: ${({ theme }) => theme.colors.bg};

  color: ${({ theme }) => theme.colors.secText};
  text-align: center;
`;

const Others = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.View`
  margin-top: -14px;
`;

const Title = styled(FontText)`
  margin-vertical: 24px;

  text-align: center;
  font-size: ${({ theme }) => theme.sizes.xxl}px;
  font-weight: bold;
`;

export { Buttons, Button, Footer, Text, Others, Row, Title };
