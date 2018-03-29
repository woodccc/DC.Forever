<template>
    <Layout>
      <div class="qr-code">
        <vue-particles color="#dedede"/>
        <qriously :value="address" :size="200" class="qriously"/>
      </div>
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
    .qr-code {
        background: #565758;
    }
    .qriously {
        position: absolute;
        top: calc(50vh - 120px);
        left: calc(50vw - 100px);
        text-align: center;
    }

    #particles-js {
      width: 100%;
      height: calc(100vh - 52px);
    }
</style>
