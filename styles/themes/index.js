import dark from "./dark";
import light from "./light";

const others = {
  sizes: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
  },
};

const darkTheme = { ...dark, ...others };
const lightTheme = { ...light, ...others };

export { darkTheme, lightTheme };
