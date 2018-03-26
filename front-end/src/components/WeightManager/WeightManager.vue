<template>
  <Layout>
    <el-button
      @click="handleToggleUpdatePopupVisible"
      type="primary"
      icon="el-icon-edit"
      round
      class="create-new-record-button"
    >添加</el-button>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-tickets"></i>记录列表</span>
        <WeightList/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-picture-outline"></i>趋势图</span>
        <WeightChart/>
      </el-tab-pane>
    </el-tabs>
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
