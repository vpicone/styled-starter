import styled, { withTheme, ThemeInterface, Color } from "styled-components";
import { Card, Flex, Heading, Text } from "rebass";

const Pallete = ({ name, color }: { name: string; color: Color }) => {
  const values = Object.values(color);
  return (
    <>
      <Heading fontSize={[7]}>{name}</Heading>
      <Flex width={[1]} flexWrap="wrap" justifyContent="center">
        {values.map((hex, i) => {
          const contrast = i < 3 ? values.length - 1 : 0;
          return (
            <Card
              css={`
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid ${props => props.theme.colors.grey[3]};
              `}
              p={5}
              m={1}
              borderRadius={8}
              key={`${name}.${i}`}
              width={[1, 1 / 3, null, 1 / 4]}
              bg={`${name}.${i}`}
            >
              <Text color={`${name}.${contrast}`}>{hex.toLowerCase()}</Text>
            </Card>
          );
        })}
      </Flex>
    </>
  );
};

const Home = ({ theme }: { theme: ThemeInterface }) => {
  const { colors } = theme;
  const entries = Object.entries(colors);
  return (
    <Flex flexDirection="column" alignItems="center">
      {entries.map(([name, color]: [string, Color]) => (
        <Pallete key={name} name={name} color={color} />
      ))}
    </Flex>
  );
};

export default withTheme(Home);
