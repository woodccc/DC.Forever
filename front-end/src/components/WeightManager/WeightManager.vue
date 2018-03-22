<template>
    <Layout>
        <el-container>
            <el-aside>
                <AddNewWeight />
            </el-aside>
            <el-main class="weight-manager-main">
                <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-tickets"></i>记录列表</span>
                        <WeightList />
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-picture-outline"></i>趋势图</span>
                        <WeightChart />
                    </el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
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
</style>
