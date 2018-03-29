<template>
  <Layout>
    <el-button
      @click="handleToggleUpdatePopupVisible"
      type="primary"
      icon="el-icon-edit"
      round
      class="create-new-record-button"
    >添加</el-button>
    <van-tabs>
      <van-tab title="记录列表">
        <div slot="title">
          <i class="el-icon-tickets"/>记录列表
        </div>
        <WeightList/>
      </van-tab>
      <van-tab title="记录列表">
        <div slot="title">
          <i class="el-icon-picture-outline"></i>趋势图
        </div>
        <WeightChart/>
      </van-tab>
    </van-tabs>
    <van-popup v-model="updatePopupVisible" position="right" :overlay="true">
      <update-weight-popup-content
        :onCancel="handleToggleUpdatePopupVisible"
        :onOk="handleSave"
      />
    </van-popup>
  </Layout>
</template>

<script>
import { mapActions } from 'vuex'

import Layout from 'components/Layout'
import AddNewWeight from './AddNewWeight'
import WeightList from './WeightList'
import WeightChart from './WeightChart'
import UpdateWeightPopupContent from '@/components/WeightManager/UpdateWeightPopupContent'

export default {
  data() {
    return {
      updatePopupVisible: false
    }
  },
  methods: {
    ...mapActions({
      updateWeightRecord: 'updateWeightRecord',
      addNewWeightRecord: 'addNewWeightRecord'
    }),
    handleToggleUpdatePopupVisible () {
      this.updatePopupVisible = !this.updatePopupVisible
    },
    handleSave(newWeightRecord) {
      // console.log('newWeightRecord', newWeightRecord)
      this.addNewWeightRecord(newWeightRecord)
      this.handleToggleUpdatePopupVisible()
    }
  },
  components: { Layout, AddNewWeight, WeightList, WeightChart, UpdateWeightPopupContent }
}
</script>

<style>
  .weight-manager-main {
    padding-top: 0;
  }

  .create-new-record-button {
    margin-bottom: 8px;
  }
</style>
