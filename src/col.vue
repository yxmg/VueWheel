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
      span: {
        type: [Number, String],
        validator: checkIsLessThanTwentyFour
      },
      offset: {
        type: [Number, String],
        validator: checkIsLessThanTwentyFour
      },
      phone: {
        type: Object,
        validator: checkOnlySpanOrOffset
      },
      ipad: {
        type: Object,
        validator: checkOnlySpanOrOffset
      },
      narrowPc: {
        type: Object,
        validator: checkOnlySpanOrOffset
      },
      widePc: {
        type: Object,
        validator: checkOnlySpanOrOffset
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        const { span, offset, phone, ipad, narrowPc, widePc } = this

        return [
          ...this.createClasses({ span, offset }),
          ...this.createClasses(phone, 'phone-'),
          ...this.createClasses(ipad, 'ipad-'),
          ...this.createClasses(narrowPc, 'narrow-pc-'),
          ...this.createClasses(widePc, 'wide-pc-'),
        ]
      },
      colStyle() {
        const { gutter } = this
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`
        }
      }
    },

    methods: {
      createClasses(obj, str = '') {
        if (!obj) return []
        let result = []
        obj.span && result.push(`col-${str}${obj.span}`)
        obj.offset && result.push(`offset-${str}${obj.offset}`)
        return result
      }
    },
  }
</script>

<style lang="scss" scoped>
  .g-col {
    width: 50%;
    // phone
    @media (min-width: 576px) {
      $class-prefix: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-phone-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    // ipad
    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-ipad-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    // 默认为PC尺寸，993px-1200px
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

    // narrow-pc
    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-narrow-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    // wide-pc
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $class-prefix: offset-wide-pc-;

      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
