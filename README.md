# vue-lib

A monorepo starter for Vue libraries. Written in TypeScript and supports TSX.

## Features

1. Vite
2. TypeScript
3. Supports both Vue SFCs and Vue TSX components
4. pnpm
5. ESLint and Prettier
6. Vitest and Playwright for testing (soon)
7. GitHub Actions for CI and release (soon)

## Installation

1. Download the repo. You can either:

   a. Clone the repo without the git history:

   ```sh
   pnpx degit https://github.com/mujahidfa/vue-lib
   ```

   b. Or, create a repo based on this template via the [GitHub template generator](https://github.com/mujahidfa/vue-lib/generate).

2. Install packages.

   ```sh
   pnpm install
   ```

3. Build the library.

   ```sh
   cd vue-lib/
   pnpm build
   ```

4. Run the demo app to see the library in action.

   ```sh
   cd ../demo/
   pnpm dev
   ```
