<template>
  <ul
    class="d-none d-md-flex align-center theMainMenuDesktop"
    :class="{'disabled-blur': isTouchDevice}"
  >
    <li v-for="(n, i) in items" :key="i">
      <a
        :ref="n.slug"
        v-ripple="{ class: 'brown-bg' }"
        :href="n.slug"
        class="rounded"
        :class="{
          'white--text': bg === 'transparent',
          'black--text': bg !== 'transparent',
          active: activeSectionName === n.title
        }"
        @click.prevent="goTo(n.slug)"
      >
        {{ n.title }}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    bg: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isTouchDevice: false
    }
  },

  computed: {
    ...mapState('activeSection', [
      'activeSectionName'
    ])
  },
  created () {
    this.$nuxt.$on('is-touch-device', () => {
      this.isTouchDevice = true
    })
  },
  methods: {
    goTo (link) {
      const element = document.getElementById(link.replace('#', ''))
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
$animate: all 0.2s ease-in-out;

.theMainMenuDesktop {
  @media (min-width: $breakpoint-lg) {
    margin-right: -21px;
  }
}

ul {
  margin: 0;
  padding: 0;
  display: flex;

  &:hover {
    li a {
      opacity: 0.4;
      filter: blur(4px);
    }
  }

  li {
    list-style:none;
    margin: 0;
    transition: 0.5s;

    a {
      height: 48px;
      padding: 0 23px;
      display: flex;
      align-items: center;
      text-transform: none;
      font-size: 18px;
      position: relative;
      transition: 0.3s;
      user-select: none;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 99.8%;
        height: 100%;
        transition: 0.6s;
        transform-origin: right;
        transform: scaleX(0);
        z-index: -1;
        border-radius: 4px;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 7px;
        width: 0;
        height: 2px;
        left: 23px;
        margin: 5px 0 0;
        transition: $animate;
        transition-duration: 0.3s;
        opacity: 1;
        z-index: -1;
        background-color: darken(white, 5%);
      }

      &.white--text::after {
        background-color: darken(white, 5%);
      }

      &.black--text::after {
        background-color: #000;
      }

      &.active::after {
        opacity: 1;
        width: calc(100% - 46px);
      }

      &:hover {
        opacity: 1;
        filter: blur(0);
        text-decoration: none;
        color: #fff !important;

        &:before{
          transition: transform 0.3s;
          transform-origin: left;
          transform: scaleX(1);
          background: #666666;
        }

        &:after {
          background-color: #fff;
        }
      }
    }
  }

  &.disabled-blur {
    &:hover {
    li a {
      opacity: 1;
      filter: blur(0);
    }
  }
  }
}

::v-deep .brown-bg {
  color: lighten(#666666, 50%);
  z-index: -1;
}
</style>
