import { ThemeInterface } from "./styled-components";

const Theme: ThemeInterface = {
  colors: {
    primary: {
      0: "#000D21",
      1: "#012459",
      2: "#023788",
      3: "#125EB9",
      4: "#438FDB",
      5: "#92C5F1",
      6: "#F2F9FF"
    },
    secondary: {
      0: "#170021",
      1: "#40045A",
      2: "#650D89",
      3: "#921DBA",
      4: "#BB4CDB",
      5: "#DF97F1",
      6: "#FDF2FF"
    },
    tertiary: {
      0: "#330023",
      1: "#7F0055",
      2: "#C20080",
      3: "#F6019D",
      4: "#FF42CD", // brand-red
      5: "#FF9AEF",
      6: "#FFF8FE"
    },
    grey: {
      0: "#111212",
      1: "#171A1D",
      2: "#262F3A",
      3: "#7C91A8",
      4: "#C3D9EF",
      5: "#E3F2FE",
      6: "#F8FCFF"
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
