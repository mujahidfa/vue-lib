# vue-lib

A monorepo starter for Vue libraries. Written in TypeScript and supports TSX.

## Installation

Install the package:

```sh
npm install vue-lib
# or
pnpm install vue-lib
#or
yarn add vue-lib
```

Import the components directly:

<!-- prettier-ignore -->
```vue
<script setup lang="ts">
import { CoolCounter, CoolButton } from "vue-lib";
</script>

<template>
  <CoolCounter :startingCount="10" />
  <CoolButton backgroundColor="blue">
    Hello, I'm a cool button!
  </CoolButton>
</template>

<style>
@import "vue-lib/index.css";
</style>
```

## Development

```sh
pnpm install
cd vue-lib/
pnpm build
cd ../demo/
pnpm dev
```

### Credits

MIT License

Copyright (c) 2023 Mujahid Anuar <<https://github.com/mujahidfa>>

Credits to this person for inspiring this library!
