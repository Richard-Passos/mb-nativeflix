import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;

  background-color: ${({ theme }) => theme.colors.bg};

  flex: 1;
  display: flex;
  flex-direction: column;
`;

export { Container };
