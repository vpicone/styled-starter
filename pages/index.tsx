import Box from "../components/Box";
import styled from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.colors.primary[3]};
  padding: ${props => props.theme.space[5]};
`;

const Home = () => (
  <Box bg="primary.2">
    <Title>Hello</Title>
    <Title>Hello</Title>
    <Title>Hello</Title>
  </Box>
);

export default Home;
