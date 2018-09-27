<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
