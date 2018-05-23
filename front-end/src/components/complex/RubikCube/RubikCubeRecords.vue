<template>
  <div class="rubik-cube-records-container">
    <el-table
      :data="records"
      style="width: 100%"
      height="100%"
    >
      <el-table-column prop="dateTime" label="日期" />
      <el-table-column prop="time" label="成绩">
        <template slot-scope="scope">
          <span>{{toReadbleTime(scope.row.time)}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import { toReadbleTime } from '@/utils/numberUtils'

  export default {
    name: 'rubik-cube-records',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        records: 'formatDateTimeSpeed3Records'
      })
    },
    methods: {
      ...mapActions({}),
      toReadbleTime
    }
  }
</script>

<style scoped>
  .rubik-cube-records-container {
    height: calc(100vh - 90px);
  }
</style>
