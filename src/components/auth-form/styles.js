/* Logic */
import styled from "styled-components/native";

/* Components */
import { FontText } from "../../utils";
import Button from "../button";

const Container = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-top-left-radius: 75px;

  flex: 1;
  gap: 24px;
`;

const Title = styled(FontText)`
  margin-vertical: 24px;

  text-align: center;
  font-size: ${({ theme }) => theme.sizes.xxl}px;
  font-weight: bold;
`;

const FormRow = styled.View`
  margin-top: -14px;
`;

const ExtraOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Submit = styled(Button)`
  padding: 12px;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Text = styled(FontText)`
  color: ${({ theme }) => theme.colors.secText};
`;

export { Container, Title, Text, FormRow, ExtraOptions, Submit, Footer };
