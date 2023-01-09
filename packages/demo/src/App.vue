<script setup lang="ts">
import {
  CoolCounter,
  CoolButton,
  type CoolButtonProps,
  type CoolButtonColor,
} from "vue-lib";
</script>

<template>
  <CoolCounter :startingCount="10" />
  <CoolButton backgroundColor="blue"> Hello, I'm a cool button! </CoolButton>
</template>

<style>
@import "vue-lib/index.css";
</style>
