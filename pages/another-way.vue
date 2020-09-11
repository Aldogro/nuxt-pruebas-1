<template>
  <div>
    <p>estás en otro lado</p>
    <p>Welcome</p>
    <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/another-way',
      es: '/otro-lado',
      fr: '/utu-ladu'
    }
  }
}
</script>