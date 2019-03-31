<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-rol",
    props: {
      gutter: [Number, String],
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value)
        }
      }
    },
    computed: {
      rowStyle() {
        let { gutter } = this
        return {
          marginLeft: -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px'
        }
      },
      rowClass() {
        const { align } = this
        return [align && `align-${align}`]
      }
    },
    mounted() {
      const children = this.$children
      children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .align {

    &-left {
      justify-content: flex-start;
    }

    &-center {
      justify-content: center;
    }

    &-right {
      justify-content: flex-end;
    }
  }

</style>
