# Styled Starter

Typesafe and typehinted theming in a next.js application.
https://styled-system-next-demo.now.sh

## Usage

- Clone the project and run `npm install`
- You can alter the shape of your theme to fit your needs in `/lib/styled-components.ts`
- You'll define your theme's values in `/lib/theme.ts`

## Tools

- [TypeScript](https://www.typescriptlang.org/) provides the most thorough code completion and type hinting experience.
- [Styled-components](https://www.styled-components.com/) allows for an easily extensible theme to be created and propgated throughout the application
- [Styled-system](https://github.com/jxnblk/styled-system) gives the mechanism for crafting reusable components that make the most of this theme.

## Notes

- We use the path setting of `tsconfig.json` to resolve all imports of styled-components to the our own version of the styled function with our custom theme interface.
