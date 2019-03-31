<template>
  <div class="g-col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
       :style="{paddingLeft: `${gutter/2}px`,paddingRight: `${gutter/2}px`}">
    <div class="g-col-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-col",
    props: {
      span: [Number, String],
      offset: [Number, String],
    },
    data() {
      return {
        gutter: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-col {
    width: 50%;

    $class-prefix1: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix1}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix2: offset-;

    @for $n from 1 through 24 {
      &.#{$class-prefix2}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  .g-col-content {
    border: 1px solid #000;
    background: lightsteelblue;
    height: 100px;
  }
</style>
