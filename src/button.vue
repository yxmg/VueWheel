<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {
    name: "g-button"
  }
</script>

<style lang="scss" scoped>
  .g-button {
    height: var(--button-height);
    font-size: var(--font-size);
    background-color: var(--button-bg);
    border-radius: var(--border-radius);
    color: var(--color);
    border: 1px solid var(--border-color);
    padding: 0 1em;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
  }


</style>
