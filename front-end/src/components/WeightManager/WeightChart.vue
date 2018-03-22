<template>
    <div>
        <line-chart
                :data="lineData"
                :options="{responsive: false, maintainAspectRatio: false}"
                :width="1000"
                :height="600"
        />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import LineChart from 'components/Charts/LineChart.js'

export default {
  components: { LineChart },
  computed: {
    ...mapGetters({weightRecords: 'weightRecords'}),
    lineData () {
      const weightRecords = _.get(this.$store, 'state.weightRecords.weightRecords', [])

      return {
        labels: _.map(weightRecords, 'date'),
        datasets: [
          {
            label: _.get(weightRecords, '0.tag'),
            backgroundColor: '#b9c4f8',
            data: _.map(weightRecords, 'weight')
          }
        ]
      }
    }
  }
}
</script>
