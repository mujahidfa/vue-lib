<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  startingCount: number;
}>();

const count = ref(props.startingCount);
</script>

<template>
  <div class="counter">
    <button class="decrement" @click="count--">-</button>
    <span class="count">{{ count }}</span>
    <button class="increment" @click="count++">+</button>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}

.counter .count {
  margin: 0 10px;
}

.counter button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
