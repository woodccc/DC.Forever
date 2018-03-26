<template>
  <el-container>
    <el-header style="padding: 0px">
      <el-menu
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
      >
        <el-menu-item index="0"><router-link to="/home">home</router-link></el-menu-item>
        <el-menu-item index="1"><router-link to="/todo">todo</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/weightManager">Weight Manager</router-link></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
import Home from 'components/Home'
export default {
  name: 'Layout',
  components: { Home }
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
