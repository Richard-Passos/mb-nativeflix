/* Logic */
import { opacify } from "polished";

export default {
  title: "dark",

  colors: {
    primary: "hsl(220, 61%, 50%)",
    primaryVar: "hsl(223, 51%, 34%)",

    bg: "hsl(240, 64%, 3%)",

    theme: "hsl(240, 50%, 7%)",
    opstTheme: "hsl(240, 50%, 93%)",

    priText: "hsl(240, 0%, 85%)",
    get secText() {
      return `${opacify(-0.3, this.priText)}`;
    },

    white: "hsl(220, 50%, 90%)",
    black: "hsl(220, 50%, 5%)",
    gray: "hsl(220, 25%, 47%)",
    red: "hsl(341, 100%, 50%)",
    yellow: "hsl(48, 85%, 50%)",
  },
};
