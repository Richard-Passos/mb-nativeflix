import { useState } from "react";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import { Container } from "./styles";
import { StatusBar } from "expo-status-bar";
import Router from "./src/routes";
/* import { BottomNav } from "./src/components"; */

import { darkTheme } from "./styles/themes";

const App = () => {
  const [theme] = useState(darkTheme);

  const [isFontsLoaded] = useFonts({
    Karla: require("./src/assets/fonts/Karla-VariableFont_wght.ttf"),
  });
  if (!isFontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style={theme.title === "dark" ? "light" : "dark"} />

        <Router />

        {/* <BottomNav /> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
