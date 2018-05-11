<template>
  <div>
    <Layout>
      <van-cell-group>
        <van-cell
          icon="qr"
          to="qr-code"
          title="二维码"
          is-link
        />
        <van-cell
          icon="pending-orders"
          to="weightManager"
          title="体重管理"
          is-link
        />
        <van-cell
          icon="clock"
          to="rubikCube"
          title="秒表"
          is-link
        />
      </van-cell-group>
    </Layout>
  </div>
</template>

<script>
  import Layout from 'components/Layout'

  export default {
    name: 'links',
    methods: {
      handleRouterBack() {
        this.$router.back()
      }
    },
    components: {
      Layout
    }
  }
</script>

<style scoped>

</style>
