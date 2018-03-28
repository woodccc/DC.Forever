<template>
    <Layout>
      <qriously :value="address" :size="200" />
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
