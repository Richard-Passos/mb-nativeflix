import { lighten } from "polished";

export default {
  title: "dark",

  colors: {
    primary: "hsl(341, 100%, 40%)",
    primaryVar: "hsl(348, 72%, 30%)",

    bg: "hsl(240, 60%, 93%)",

    theme: "hsl(240, 50%, 93%)",
    opstTheme: "hsl(240, 50%, 7%)",

    priText: "hsl(240, 35%, 15%)",
    get secText() {
      return `${lighten(0.25, this.priText)}`;
    },

    white: "hsl(220, 50%, 90%)",
    black: "hsl(220, 50%, 5%)",
    get gray() {
      return `${lighten(0.25, this.secText)}`;
    },
    red: "hsl(341, 100%, 50%)",
    yellow: "hsl(48, 85%, 50%)",
  },
};
