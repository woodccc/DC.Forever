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
    <el-dropdown
      type="primary"
      class="more-action"
      placement="top-start"
      :hide-on-click="false"
    >
      <i class="el-icon-menu" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button
            @click="handleGetEverydayAvg"
            type="text"
          >每日平均</el-button>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-button
            @click="handleGetEverydayBest"
            type="text"
          >每日最佳</el-button>
        </el-dropdown-item>
        <el-dropdown-item>
          <el-button
            @click="handleGetAllRecords"
            type="text"
          >所有</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import { toReadbleTime } from '@/utils/numberUtils'
  import { calculateEverydayBest } from './RubikCubeRecordsService'

  export default {
    name: 'rubik-cube-records',
    data() {
      return {
        records: []
      }
    },
    computed: {
      ...mapGetters({
        formatDateTimeSpeed3Records: 'formatDateTimeSpeed3Records'
      })
    },
    methods: {
      ...mapActions({}),
      toReadbleTime,
      handleGetEverydayAvg() {
        this.records = []
      },
      handleGetEverydayBest() {
        this.records = calculateEverydayBest(this.formatDateTimeSpeed3Records)
      },
      handleGetAllRecords() {
        this.records = this.formatDateTimeSpeed3Records
      }
    },
    created() {
      this.records = this.formatDateTimeSpeed3Records
    }
  }
</script>

<style scoped>
  .rubik-cube-records-container {
    height: calc(100vh - 90px);
  }

  .more-action {
    position: absolute;
    bottom: 28px;
    left: 12px;
  }
  .el-icon-menu {
    font-size: 40px;
  }
</style>
