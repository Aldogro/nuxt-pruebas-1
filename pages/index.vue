<template>
  <div>
    <nuxt-link :to="localePath('another-way')">otro lado</nuxt-link>
    <lottie :width="1024" :height="1024" :options="lottieOptions" v-on:animCreated="handleAnimation" />
  </div>

</template>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '../assets/animations/31313-spaceman-404.json'

export default {
  components: { lottie },
  data () {
    return {
      showModal: false,
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
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
}
</script>