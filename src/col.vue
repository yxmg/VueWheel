<template>
  <div class="g-col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-col",
    props: {
      span: [Number, String],
    }
  }
</script>

<style lang="scss" scoped>
  .g-col {
    height: 100px;
    background: lightsteelblue;
    width: 50%;
    border: 1px solid #000;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>
