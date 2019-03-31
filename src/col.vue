<template>
  <div class="g-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  const checkIsLessThanTwentyFour = (value) => {
    if (value > 0 && value <= 24 && value % 1 === 0) {
      return true
    } else {
      console.warn('span或offset必须为小于24的正整数')
      return false
    }
  }
  const checkOnlySpanOrOffset = (value) => {
    const keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      valid = ['span', 'offset'].includes(key)
    })
    if (!valid) {
      console.warn('只允许key值为span或offset')
    }
    return valid
  }
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

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;

    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
