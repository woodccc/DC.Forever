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
    <i class="el-icon-menu more-action" @click="handleToggleMoreAction"/>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <div class="bottom-action-button-container">
        <van-row>
          <van-col span="24">
            <van-button
              @click="handleGetEverydayAvg"
              type="text"
              bottom-action
            >每日平均</van-button>
          </van-col>
          <van-col span="24">
            <van-button
              @click="handleGetEverydayBest"
              bottom-action
              type="text"
            >每日最佳</van-button>
          </van-col>
          <van-col span="24">
            <van-button
              @click="handleGetAllRecords"
              bottom-action
              type="text"
            >所有记录</van-button>
          </van-col>
        </van-row>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  import { toReadbleTime } from '@/utils/numberUtils'
  import { calculateEverydayBest, calculateEverydayAvg } from './RubikCubeRecordsService'

  export default {
    name: 'rubik-cube-records',
    data() {
      return {
        records: [],
        show: false
      }
    },
    computed: {
      ...mapGetters({
        formatDateTimeSpeed3Records: 'formatDateTimeSpeed3Records'
      })
    },
    methods: {
      ...mapActions(['updateTitle']),
      toReadbleTime,
      handleGetEverydayAvg() {
        this.records = calculateEverydayAvg(this.formatDateTimeSpeed3Records)
        this.handleToggleMoreAction()
        this.updateTitle('每日平均')
      },
      handleGetEverydayBest() {
        this.records = calculateEverydayBest(this.formatDateTimeSpeed3Records)
        this.handleToggleMoreAction()
        this.updateTitle('每日最佳')
      },
      handleGetAllRecords() {
        this.records = this.formatDateTimeSpeed3Records
        this.handleToggleMoreAction()
        this.updateTitle('所有记录')
      },
      handleToggleMoreAction() {
        this.show = !this.show
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

  .bottom-action-button-container {
    padding: 16px 0;
  }

  .van-button {
    color: black;
    background-color: white;
  }
</style>
