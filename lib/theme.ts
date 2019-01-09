import { ThemeInterface } from "./styled-components";

const Theme: ThemeInterface = {
  colors: {
    grey: {
      0: "#111212",
      1: "#171A1D",
      2: "#262F3A",
      3: "#7C91A8",
      4: "#C3D9EF",
      5: "#E3F2FE",
      6: "#F8FCFF"
    },
    primary: {
      0: "#002B4D",
      1: "#064B81",
      2: "#1169AD",
      3: "#3088CC",
      4: "#70AEDF",
      5: "#ADD4F2",
      6: "#F8FCFF"
    },
    secondary: {
      0: "#4D3400",
      1: "#885D00",
      2: "#BC8100",
      3: "#E39B00",
      4: "#FDBB2D",
      5: "#FFDD8E",
      6: "#FFFDF8"
    },
    tertiary: {
      0: "#4D0600",
      1: "#820E03",
      2: "#B01708",
      3: "#D03122",
      4: "#E4695D", // brand-red
      5: "#F5AAA3",
      6: "#FFF9F8"
    }
  },
  space: [
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
    "12rem",
    "16rem",
    "24rem",
    "32rem",
    "40rem",
    "48rem"
  ]
};

export default Theme;
