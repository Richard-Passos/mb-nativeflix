/* Logic */
import { useFonts } from "expo-font";

/* Components */
import { ThemeProvider } from "styled-components/native";
import { Container } from "./styles";
import { StatusBar } from "expo-status-bar";
import Router from "./src/routes";
import { BottomNav } from "./src/components";
import { useState } from "react";

/* Themes */
import { dark, light } from "./styles/themes";

const App = () => {
  const [theme, setTheme] = useState(dark);

  const [isFontsLoaded] = useFonts({
    Karla: require("./src/assets/fonts/Karla-VariableFont_wght.ttf"),
  });
  if (!isFontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="dark" />

        <Router />

        {/* <BottomNav /> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
