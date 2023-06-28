/* Logic */
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.sizes.xl}px;
  color: ${({ theme }) => theme.colors.primeText};
`;

export { TextInput };
