<template>
  <Layout>
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
  </Layout>
</template>

<script>
import Layout from 'components/Layout'
import AddNewWeight from './AddNewWeight'
import WeightList from './WeightList'
import WeightChart from './WeightChart'

export default {
  components: { Layout, AddNewWeight, WeightList, WeightChart }
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
