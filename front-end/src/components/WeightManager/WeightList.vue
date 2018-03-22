<template>
    <div>
        <el-table
                :data="weightRecords"
                stripe
                style="width: 100%"
        >
            <el-table-column
                    prop="date"
                    label="日期">
            </el-table-column>
            <el-table-column
                    prop="weight"
                    label="体重">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="标签">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
                    <el-button @click="handleOpenUpdateDialog(scope.row)" type="text" size="small">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <update-weight-dialog
                v-if="updateDialogVisible"
                :weightRecord="updatingRecord"
                :onCancel="handleToggleUpdateDialog"
                :onOk="handleSave"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import UpdateWeightDialog from '@/components/WeightManager/UpdateWeightDialog'

export default {
    data() {
        return {
            updateDialogVisible: false,
            updatingRecord: {}
        }
    },
    beforeCreate: function () {
        this.$store.dispatch('loadWeightRecords')
    },
    computed: {
        ...mapGetters({weightRecords: 'weightRecords'})
    },
    methods: {
        ...mapActions({
            updateWeightRecord: 'updateWeightRecord'
        }),
        handleDelete(record) {
            this.$store.dispatch('deleteWeightRecord', record._id)
        },
        handleOpenUpdateDialog(updatingRecord) {
            this.updatingRecord = updatingRecord
            this.handleToggleUpdateDialog()
        },
        handleToggleUpdateDialog() {
            this.updateDialogVisible = !this.updateDialogVisible
        },
        handleSave(newWeightRecord) {
            this.updateWeightRecord(newWeightRecord)
            this.handleToggleUpdateDialog()
        }
    },
    components: {
        UpdateWeightDialog
    }
}
</script>
