import styled from "styled-components/native";
import { viewHeight, FontText, viewWidth } from "../../../utils";
import { opacify } from "polished";
import { Button } from "../../../components";

const TextContainer = styled.View`
  min-height: ${viewHeight * 0.68}px;

  margin-top: -${viewHeight * 0.1}px;
  border-radius: ${({ theme }) => theme.sizes.xl}px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.bg};

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
  font-size: ${({ theme }) => theme.sizes.xl}px;
  font-weight: bold;
`;

const Overview = styled(FontText)`
  color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.sizes.sm}px;
  line-height: 18px;
`;

const BtnTrailer = styled(Button)`
  width: ${viewWidth * 0.75}px;

  background-color: ${({ theme }) => theme.colors.red};

  align-self: center;
`;

const InfoContainer = styled.View`
  width: 125px;
  height: 150px;

  margin-horizontal: 8px;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.sizes.md}px;
  padding: 20px;

  background-color: ${({ theme }) => opacify(-0.9, theme.colors.opstTheme)};

  justify-content: space-between;
`;

const InfoTitle = styled(FontText)`
  color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.sizes.sm}px;
`;

const Info = styled(FontText)`
  font-weight: bold;
`;

const Gap = styled.View`
  gap: 4px;
`;

export {
  InfoContainer,
  Title,
  Info,
  Gap,
  RatingContainer,
  Overview,
  BtnTrailer,
  InfoTitle,
  TextContainer,
};
