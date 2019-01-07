import styled from "styled-components";
import {
  color,
  space,
  width,
  SpaceProps,
  WidthProps,
  ColorProps
} from "styled-system";

type BoxProps = SpaceProps & WidthProps & ColorProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${color}
`;

Box.displayName = "Box";

export default Box;
