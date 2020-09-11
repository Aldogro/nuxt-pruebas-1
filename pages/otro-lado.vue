<template>
  <div>
    <p>estás en otro lado</p>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/another-way',
      es: '/otro-lado'
    }
  }
}
</script>