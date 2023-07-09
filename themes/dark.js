import { MD3DarkTheme } from "react-native-paper";
export default {
  ...MD3DarkTheme,
  dark: true,
  roundness: 24,

  colors: {
    ...MD3DarkTheme.colors,
    primary: "hsl(240, 40%, 55%)",
    background: "hsl(240, 35%, 6%)",
    backgroundVariant: "hsl(240, 35%, 12%)",
    error: "hsl(341, 45%, 50%)",

    onPrimary: "hsl(240, 35%, 95%)",
    onBackground: "hsl(240, 0%, 70%)",
    onSurface: "hsl(240, 0%, 95%)",
    onSurfaceVariant: "hsl(240, 0%, 85%)",

    red: "hsl(341, 75%, 50%)",
    yellow: "hsl(48, 75%, 50%)",
    gray: "hsl(240, 20%, 30%)",
  },
};
