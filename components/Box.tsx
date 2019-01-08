import styled from "styled-components";
import {
  color,
  SpaceProps,
  WidthProps,
  ColorProps,
  FlexWrapProps,
  DisplayProps,
  HeightProps
} from "styled-system";

type BoxProps = SpaceProps &
  WidthProps &
  ColorProps &
  FlexWrapProps &
  HeightProps &
  DisplayProps;

const Palette = styled.div`
  margin: ${props => props.theme.space[3]};
`;

export const Color = styled.div<BoxProps>`
  margin: ${props => props.theme.space[1]};
  width: ${props => props.theme.space[10]};
  height: 75px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${color}
`;

export default Palette;
