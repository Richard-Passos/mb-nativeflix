import styled from "styled-components/native";
import { viewHeight, FontText } from "../../../utils";
import { opacify } from "polished";
import { Button } from "../../../components";

const Container = styled.View`
  min-height: ${viewHeight * 0.68}px;

  margin-top: -${viewHeight * 0.1}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.xxl}px;
  border-top-left-radius: ${({ theme }) => theme.sizes.xxl}px;
  padding: 32px;

  background-color: ${({ theme }) => theme.colors.bg};

  gap: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 24px;
`;

const Title = styled(FontText)`
  font-size: ${({ theme }) => theme.sizes.xxl}px;
  font-weight: bold;
`;

const Text = styled(FontText)`
  color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: 18px;
`;

const CardCon = styled.View`
  width: 125px;
  height: 150px;

  margin-bottom: 12px;
  border-radius: ${({ theme }) => theme.sizes.md}px;
  padding: 20px;

  background-color: ${({ theme }) => opacify(-0.9, theme.colors.opstTheme)};

  justify-content: space-between;
`;

const Gap = styled.View`
  gap: 4px;
`;

const CardText = styled(FontText)`
  font-weight: bold;
`;

const Trailer = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
`;

export { Container, Row, Title, Text, CardCon, CardText, Gap, Trailer };
