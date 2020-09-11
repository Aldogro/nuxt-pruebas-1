<template>
  <c-box
    v-bind="mainStyles[colorMode]"
    d="flex"
    w="100vw"
    h="100vh"
    flex-dir="column"
    justify-content="center"
    align-items="center"
  >
    <c-icon-button
      m="2"
      :icon="colorMode === 'light' ? 'moon' : 'sun'"
      @click="toggleColorMode"
      :aria-label="`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`"
    />

    <c-button left-icon="info" variant-color="blue" m="2" @click="showToast">Show Toast</c-button>

    <c-button size="sm" color="primary" @click="$toggleColorMode">Toggle Color Mode</c-button>
    <nuxt-link to="/otro-lado">otro lado</nuxt-link>
    <c-switch @click="consol()" :value="showModal" color="vue" m="2"/>

    <lottie :width="1024" :height="1024" :options="lottieOptions" v-on:animCreated="handleAnimation" />

  </c-box>
</template>
<script>
import { CBox, CIconButton, CButton, CSwitch } from '@chakra-ui/vue'
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '../assets/animations/31313-spaceman-404.json'

export default {
  inject: ['$chakraColorMode', '$toggleColorMode', '$chakraTheme'],
  components: { CBox, CIconButton, CButton, CSwitch, lottie },
  data () {
    return {
      showModal: false,
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  methods: {
    consol() {
      console.log(this)
      this.showModal = !this.showModal
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    showToast() {
      this.$toast({
        position: 'top-right',
        title: 'Vas bien pajarito!',
        description: 'Ah, pero qué bonito!!!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },  
}
</script>