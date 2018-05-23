<template>
  <div>
    <p class="timer-text">{{toReadbleTime(xmsCount)}}</p>
    <div>
      <el-button @click="handleSave" v-if="!isTimerActive && xmsCount !== 0" circle>保存</el-button>
      <el-button @click="startTime" v-if="!isTimerActive && xmsCount === 0" circle>开始</el-button>
      <el-button @click="stopTime" v-if="isTimerActive" circle>停止</el-button>
    </div>
    <div>
      <p>{{displayRecords}}</p>
      <p>最快:{{toReadbleTime(fastestRecord)}}</p>
      <p>最慢:{{toReadbleTime(slowestRecord)}}</p>
      <p>平均:{{avgRecord}}</p>
    </div>
    <van-row class="bottom-button">
      <van-col span="12">
        <van-button bottom-action @click="handleSavePlus2">+2</van-button>
      </van-col>
      <van-col span="12">
        <van-button bottom-action @click="handleDNF">DNF Or Pop</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import { toReadbleTime } from '@/utils/numberUtils'

  export default {
    name: 'rubik-cube-clock',
    data() {
      return {
        isTimerActive: false,
        timer: null,
        xmsCount: 0,
        xms: 0
      }
    },
    computed: {
      ...mapGetters({
        lastFiveSpeed3Records: 'lastFiveSpeed3Records',
        fastestRecord: 'fastestRecord',
        slowestRecord: 'slowestRecord'
      }),
      displayRecords() {
        return _.join(_.map(this.lastFiveSpeed3Records, record => this.toReadbleTime(record)), ' | ')
      },
      avgRecord() {
        return toReadbleTime(_.sum(this.lastFiveSpeed3Records) / 5)
      }
    },
    methods: {
      ...mapActions({
        saveSpeed3Record: 'saveSpeed3Record',
        loadSpeed3Records: 'loadSpeed3Records'
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
          .then(() => {
            this.handleResetTimer()
          })
      },
      handleSavePlus2() {
        if (this.xmsCount === 0) return
        if (this.isTimerActive) {
          this.stopTime()
          this.handleResetTimer()
          return
        }

        this.saveSpeed3Record(this.xmsCount + 200)
          .then(() => {
            this.handleResetTimer()
          })
      },
      handleDNF() {
        if (this.xmsCount === 0) return

        this.stopTime()
        this.handleResetTimer()
      }
    },
    mounted() {
      this.loadSpeed3Records()
    }
  }
</script>

<style scoped>
  .timer-text {
    font-size: 64px;
    margin: 0;
  }

  .el-button {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 0px;
    background: #323949;
    color: white;
    font-size: 24px;
  }

  .bottom-button {
    position: absolute;
    width: 100vw;
    top: calc(100vh - 90px);
  }
  .bottom-button .van-button {
    background-color: #323949;
  }
</style>
