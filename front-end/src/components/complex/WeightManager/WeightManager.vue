<template>
  <div>
    <Layout>
      <van-tabs>
        <van-tab title="记录列表">
          <div slot="title">
            <i class="el-icon-tickets"/>记录
          </div>
          <WeightList/>
        </van-tab>
        <van-tab title="记录列表">
          <div slot="title">
            <i class="el-icon-picture-outline"></i>趋势
          </div>
          <WeightChart/>
        </van-tab>
      </van-tabs>
    </Layout>
    <el-button
      class="add-weight-button"
      icon="el-icon-plus"
      circle
      @click="handleToggleUpdatePopupVisible"
    />
    <van-popup
      v-if="isRecordsNotEmpty"
      v-model="updatePopupVisible"
      position="right"
      :overlay="true"
    >
      <update-weight-popup-content
        :onCancel="handleToggleUpdatePopupVisible"
        :onOk="handleSave"
        :default-record="defaultRecord"
      />
    </van-popup>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import _ from 'lodash'

  import Layout from 'components/simple/Layout'
  import WeightList from './WeightList'
  import WeightChart from './WeightChart'
  import UpdateWeightPopupContent from '@/components/complex/WeightManager/UpdateWeightPopupContent'

  import { getDefaultRecord } from '@/components/complex/WeightManager/UpdateWeightPopupContentService'

  export default {
    data() {
      return {
        updatePopupVisible: false
      }
    },
    computed: {
      ...mapGetters({
        records: 'weightRecords'
      }),
      isRecordsNotEmpty() {
        return !_.isEmpty(this.records)
      },
      defaultRecord() {
        return getDefaultRecord(this.records)
      }
    },
    methods: {
      ...mapActions({
        updateWeightRecord: 'updateWeightRecord',
        addNewWeightRecord: 'addNewWeightRecord'
      }),
      handleToggleUpdatePopupVisible() {
        this.updatePopupVisible = !this.updatePopupVisible
      },
      handleSave(newWeightRecord) {
        this.addNewWeightRecord(newWeightRecord)
        this.handleToggleUpdatePopupVisible()
      }
    },
    components: { Layout, WeightList, WeightChart, UpdateWeightPopupContent }
  }
</script>

<style>
  .add-weight-button {
    position: absolute;
    border-radius: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 6px;
    font-size: 44px;
    left: 30px;
    bottom: 30px;
    z-index: 10;
  }
</style>
