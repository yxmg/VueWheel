<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" class="g-input" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <g-icon v-if="error" name="error" class="icon-error"></g-icon>
      <span class="text-error">{{error}}</span>
    </template>

  </div>

</template>

<script>
  import Icon from './icon'

  export default {
    name: "g-input",
    props: {
      value: String,
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: String,
    },
    components: {
      'g-icon': Icon,
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $color-error: #F1453D;
  .wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;

    > :not(:last-child) {
      margin-right: 0.5em;
    }

    .g-input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border: 1px solid $border-color-hover;
      }

      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #aaa;
        color: #aaa;
        cursor: not-allowed;
      }
    }

    &.error {
      .g-input {
        border-color: $color-error;
      }

      .icon-error {
        fill: $color-error;
      }

      .text-error {
        color: $color-error;
      }
    }
  }
</style>
