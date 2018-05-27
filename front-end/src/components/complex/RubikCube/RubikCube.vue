<template>
  <Layout>
    <van-tabs @click="handleClickTab">
      <van-tab title="秒表">
        <div slot="title">
          <i class="el-icon-tickets"/>秒表
        </div>
        <rubik-cube-clock/>
      </van-tab>
      <van-tab title="记录">
        <div slot="title">
          <i class="el-icon-tickets"/>记录
        </div>
        <rubik-cube-records v-if="showRubikCubeRecords"/>
      </van-tab>
    </van-tabs>
  </Layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Layout from 'components/simple/Layout'
  import RubikCubeClock from './RubikCubeClock'
  import RubikCubeRecords from './RubikCubeRecords'

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
    computed: {
      ...mapGetters({
        formatDateTimeSpeed3Records: 'formatDateTimeSpeed3Records',
        lastFiveSpeed3Records: 'lastFiveSpeed3Records',
        fastestRecord: 'fastestRecord',
        slowestRecord: 'slowestRecord'
      }),
      displayRecords() {
        return _.join(_.map(this.lastFiveSpeed3Records, record => this.toReadbleTime(record)), ' | ')
      },
      avgRecord() {
        return toReadbleTime(_.sum(this.lastFiveSpeed3Records) / 5)
      },
      showRubikCubeRecords() {
        return this.formatDateTimeSpeed3Records.length
      }
    },
    methods: {
      ...mapActions({
        updateTitle: 'updateTitle',
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
      },
      handleClickTab(index, title) {
        this.updateTitle(title)
      }
    },
    components: { Layout, RubikCubeClock, RubikCubeRecords },
    mounted() {
      this.loadSpeed3Records()
      this.updateTitle('秒表')
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
    top: calc(100vh - 50px);
  }
  .bottom-button .van-button {
    background-color: #323949;
  }
</style>
