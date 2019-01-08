import PalleteWrapper, { Color as ColorBox } from "../components/Box";
import styled, { withTheme, ThemeInterface, Color } from "styled-components";
import { fontSize, color, FontSizeProps, ColorProps } from "styled-system";

const Title = styled.h1<FontSizeProps>`
  ${fontSize}
`;
const Text = styled.p<ColorProps>`
  ${color}
`;

const Pallete = ({ name, color }: { name: string; color: Color }) => {
  const values = Object.values(color);
  return (
    <>
      <Title>{name}</Title>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {values.map((hex, i) => {
          const contrast = i < 3 ? values.length - 1 : 0;
          return (
            <ColorBox key={`${name}.${i}`} bg={`${name}.${i}`}>
              <Text color={`${name}.${contrast}`}>{hex.toLowerCase()}</Text>
            </ColorBox>
          );
        })}
      </div>
    </>
  );
};

const Home = ({ theme }: { theme: ThemeInterface }) => {
  const { colors } = theme;
  const entries = Object.entries(colors);
  return (
    <PalleteWrapper>
      {entries.map(([name, color]: [string, Color]) => (
        <Pallete key={name} name={name} color={color} />
      ))}
    </PalleteWrapper>
  );
};

export default withTheme(Home);
