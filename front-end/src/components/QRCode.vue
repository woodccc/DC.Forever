<template>
    <Layout>
      <qriously :value="address" :size="200" class="qriously"/>
    </Layout>
</template>

<script>
import Layout from 'components/Layout'

export default {
  name: 'qr-code',
  computed: {
    address () {
      return `http://${window.location.host}`
    }
  },
  components: { Layout }
}
</script>

<style scoped>
    .qriously {
        text-align: center;
    }
</style>
