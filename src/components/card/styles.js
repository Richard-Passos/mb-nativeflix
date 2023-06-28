/* Logic */
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { opacify } from "polished";

/* Components */
import { FontText } from "../../utils";

const { width } = Dimensions.get("window");

const Container = styled.View`
  ${({ styleVar }) => styleVar === "detailed" && `width: ${width * 0.91}px`};
  margin-bottom: 16px;

  flex-direction: row;
  align-items: flex-end;
`;

const BG = styled.View`
  width: 100%;
  height: 175px;
  border-radius: ${({ theme }) => theme.sizes.md}px;
  background-color: ${({ theme }) => theme.colors.theme};

  position: absolute;
`;

const Image = styled.Image`
  width: ${width * 0.35}px;
  height: 200px;
  margin-horizontal: ${({ styleVar }) => (styleVar === "detailed" ? 16 : 0)}px;
  margin-bottom: ${({ styleVar }) => (styleVar === "detailed" ? 16 : 0)}px;
  border-radius: ${({ styleVar, theme }) =>
    styleVar === "detailed" ? theme.sizes.xs : theme.sizes.md}px;
`;

const TextContainer = styled.View`
  height: 175px;
  padding-top: 12px;
  padding-bottom: 16px;
  padding-right: 16px;

  flex: 1;
  justify-content: space-between;
`;

const Title = styled(FontText)``;

const Small = styled(FontText)`
  font-size: ${({ theme }) => theme.sizes.sm}px;
  color: ${({ theme }) => theme.colors.secText};
`;

const Center = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Gap = styled.View`
  gap: 8px;
`;

export { Container, BG, Image, TextContainer, Title, Small, Center, Gap };
