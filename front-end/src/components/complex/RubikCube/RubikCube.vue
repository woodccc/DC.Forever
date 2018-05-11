<template>
  <Layout>
    <p class="timer-text">{{time}}</p>
    <div>
      <el-button @click="handleSave" v-if="!isTimerActive && time !== '00:00:00'" circle>保存</el-button>
      <el-button @click="startTime" v-if="!isTimerActive && time === '00:00:00'" circle>开始</el-button>
      <el-button @click="stopTime" v-if="isTimerActive" circle>停止</el-button>
    </div>
  </Layout>
</template>

<script>
  import { mapActions } from 'vuex'
  import Layout from 'components/Layout'

  import { toReadbleTime } from '@/utils/numberUtils'

  export default {
    name: 'rubik-cube',
    data() {
      return {
        isTimerActive: false,
        timer: null,
        time: '00:00:00',
        xms: 0
      }
    },
    methods: {
      ...mapActions({
        saveSpeed3Record: 'saveSpeed3Record'
      }),
      toReadbleTime,
      startTime() {
        this.isTimerActive = true
        let xmsCount = this.xms
        const self = this

        this.timer = setInterval(function() {
          xmsCount += 1
          self.time = toReadbleTime(xmsCount)
        }, 10)
      },
      stopTime() {
        this.isTimerActive = false
        clearInterval(this.timer)
      },
      handleSave() {
        this.saveSpeed3Record(this.time)
        this.time = '00:00:00'
        this.isTimerActive = false
      }
    },
    components: { Layout }
  }
</script>

<style scoped>
  .timer-text {
    font-size: 64px;
    padding: 16px 0;
    margin: 0;
  }

  .el-button {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: mediumvioletred;
    color: white;
    font-size: 24px;
  }
</style>
