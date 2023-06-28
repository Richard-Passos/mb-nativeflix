import styled from "styled-components/native";

const FontText = styled.Text`
  color: ${({ theme }) => theme.colors.priText};
  font-size: ${({ theme }) => theme.sizes.md}px;
  font-family: "Karla";
`;

export default FontText;
