<template>
  <Layout>
    {{time}}
    <el-button @click="startTime">开始</el-button>
    <el-button @click="stopTime">停止</el-button>
  </Layout>
</template>

<script>
  import Layout from 'components/Layout'

  import { toReadbleTime } from '@/utils/numberUtils'

  export default {
    name: 'rubik-cube',
    data() {
      return {
        timer: null,
        time: '00:00:00',
        xms: 0
      }
    },
    methods: {
      toReadbleTime,
      startTime() {
        let xmsCount = this.xms
        const self = this

        this.timer = setInterval(function() {
          xmsCount += 1
          self.time = toReadbleTime(xmsCount)
        }, 10)
      },
      stopTime() {
        clearInterval(this.timer)
      }
    },
    components: { Layout }
  }
</script>

<style scoped>

</style>
