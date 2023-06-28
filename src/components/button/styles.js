import styled from "styled-components/native";
import { FontText } from "../../utils";

const Text = styled(FontText)`
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes.xl}px;
  padding: 8px 16px;

  background-color: ${({ clear, theme }) =>
    clear ? "transparent" : theme.colors.primary};

  color: ${({ clear, theme }) =>
    clear ? theme.colors.primary : theme.colors.priText};
  font-weight: bold;
  text-align: center;
`;

export { Text };
