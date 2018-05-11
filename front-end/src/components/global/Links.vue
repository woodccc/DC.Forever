<template>
  <div>
    <Layout>
      <van-cell-group>
        <van-cell
          to="qr-code"
          title="二维码"
          is-link
        />
        <van-cell
          to="weightManager"
          title="体重管理"
          is-link
        />
        <van-cell
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
