import styled from "styled-components";
import { Box } from "rebass";

export const Color = styled(Box)`
  margin: ${props => props.theme.space[1]};
  height: 75px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Color;
