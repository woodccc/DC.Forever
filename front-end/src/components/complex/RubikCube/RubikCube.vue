<template>
  <Layout>
    <p class="timer-text">{{toReadbleTime(xmsCount)}}</p>
    <div>
      <el-button @click="handleSave" v-if="!isTimerActive && xmsCount !== 0" circle>保存</el-button>
      <el-button @click="startTime" v-if="!isTimerActive && xmsCount === 0" circle>开始</el-button>
      <el-button @click="stopTime" v-if="isTimerActive" circle>停止</el-button>
    </div>
    <van-row class="bottom-button">
      <van-col span="12">
        <van-button bottom-action @click="handleSavePlus2">+2</van-button>
      </van-col>
      <van-col span="12">
        <van-button bottom-action @click="handleDNF">DNF Or Pop</van-button>
      </van-col>
    </van-row>
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
        xmsCount: 0,
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
          self.xmsCount = xmsCount
        }, 10)
      },
      stopTime() {
        this.isTimerActive = false
        clearInterval(this.timer)
      },
      handleResetTimer () {
        this.xmsCount = 0
        this.isTimerActive = false
      },
      handleSave() {
        this.saveSpeed3Record(this.xmsCount)
        this.handleResetTimer()
      },
      handleSavePlus2() {
        if (this.xmsCount === 0) return

        this.saveSpeed3Record(this.xmsCount + 200)
        this.handleResetTimer()
      },
      handleDNF() {
        if (this.xmsCount === 0) return

        this.handleResetTimer()
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
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-top: 50px;
    background: mediumvioletred;
    color: white;
    font-size: 24px;
  }

  .bottom-button {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }
</style>
