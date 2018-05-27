<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="导航"
      left-arrow
      @click-left="handleRouterBack"
      @click-right="handleLinkTo('links')"
    />
    <van-row style="height: calc(100vh - 96px)">
      <slot/>
    </van-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Home from 'components/Home'

  export default {
    name: 'Layout',
    components: { Home },
    computed: {
      ...mapGetters({
        title: 'title'
      })
    },
    methods: {
      handleLinkTo(path) {
        this.$router.push({ path: `/${path}` })
      },
      handleRouterBack() {
        this.$router.back()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
