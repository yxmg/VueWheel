<template>
  <button class="g-button" :class="`icon-${iconPosition}`"
          @click="handleButtonClick">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon v-if="loading" name="loading" class="icon loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "g-button",
    props: {
      icon: String,
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          const allowValue = ['left', 'right']
          return allowValue.includes(value)
        }
      },
      loading: Boolean,
    },
    methods: {
      handleButtonClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    height: var(--button-height);
    font-size: var(--font-size);
    background-color: var(--button-bg);
    border-radius: var(--border-radius);
    color: var(--color);
    border: 1px solid var(--border-color);
    padding: 0 0.8em;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }

      > .content {
        order: 1;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
