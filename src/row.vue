<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-rol",
    props: {
      gutter: [Number, String]
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
