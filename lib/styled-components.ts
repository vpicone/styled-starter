import styledComponents from "../node_modules/styled-components";
import { ThemedStyledComponentsModule } from "node_modules/@types/styled-components/index";

export type Color = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};

export interface ThemeInterface {
  colors: {
    primary: Color;
    secondary: Color;
    tertiary: Color;
    accent?: Color;
    grey: Color;
  };
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
  ];
}

export const defaultSpace = [
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
];

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  withTheme
};
export default styled;
