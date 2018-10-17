<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
    <VueCookieAcceptDecline 
      :debug="false"
      :position="'bottom'"
      :disableDecline="true"
      @clickedAccept="gdpr"
    />
  </div>
</template>
<script>
import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'
import VueCookieAcceptDecline from '../components/partials/vue-cookie-accept-decline'

export default {
  data() {
    return {
      load: false
    }
  },
  components: {
    Header,
    Footer,
    VueCookieAcceptDecline
  },
  methods: {
    gdpr() {
      this.load = true;
    }
  }
}
</script>
