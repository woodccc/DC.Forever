<template>
    <div>
        <el-radio-group
          v-model="filter"
          size="mini"
          style="width: 280px"
        >
          <el-radio-button label="CL"></el-radio-button>
          <el-radio-button label="DTT"></el-radio-button>
          <el-radio-button label="ZK"></el-radio-button>
        </el-radio-group>
        <div class="chart-container">
          <chart :options="options" auto-resize/>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  data() {
    return {
      filter: 'CL'
    }
  },
  computed: {
    ...mapGetters({weightRecords: 'weightRecords'}),
    options () {
      const weightRecords = _.get(this.$store, 'state.weightRecords.weightRecords', [])
      const data = _.groupBy(weightRecords, 'tag')
      const currentRecords = data[this.filter]

      const weightData = _.map(currentRecords, 'weight')
      const dateData = _.map(currentRecords, 'date')
      const min = Number(_.min(weightData)) - 5
      const max = Number(_.max(weightData)) + 5

      return {
        xAxis: {
          type: 'category',
          data: dateData
        },
        yAxis: {
          type: 'value',
          min: min,
          max: max
        },
        series: [{
          data: weightData,
          type: 'line',
          smooth: true
        }]
      }
    }
  }
}
</script>

<style scoped>
  .chart-container {
      width: 100%;
      height: calc(100vh - 260px);
  }
  .echarts {
      width: calc(100vw - 40px);
      height: calc(100vh - 260px);
  }
</style>
