<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-rol",
    props: {
      gutter: [Number, String]
    },
    computed: {
      rowStyle() {
        let { gutter } = this
        return {
          marginLeft: -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px'
        }
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

  }
</style>
