<template>
  <div class="g-col" :class="colClass" :style="colStyle">
    <slot></slot>
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
    },
    computed: {
      colClass() {
        const { span, offset } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      colStyle() {
        const { gutter } = this
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`
        }
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
</style>
