/* Logic */
import styled from "styled-components/native";

/* Components */
import { FontText } from "../../utils";

const Text = styled(FontText)`
  padding: 8px 16px;
  background-color: ${({ clear, theme }) =>
    clear ? "transparent" : theme.colors.primary};
  color: ${({ clear, theme }) =>
    clear ? theme.colors.primary : theme.colors.priText};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.sizes.xl}px;
  text-align: center;
  font-weight: bold;
`;

export { Text };
