<template>
    <div>
        <el-table
                :data="weightRecords"
                stripe
                border
                style="width: 100%"
                height="calc(100vh - 189px)"
        >
            <el-table-column
                    min-width="90px"
                    prop="date"
                    label="日期">
            </el-table-column>
            <el-table-column
                    min-width="50px"
                    prop="weight"
                    label="体重">
            </el-table-column>
            <el-table-column
                    min-width="50px"
                    prop="tag"
                    label="标签">
            </el-table-column>
            <el-table-column
                    min-width="70px"
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.row)" type="text" size="small"><i class="el-icon-delete"></i></el-button>
                    <el-button @click="handleOpenUpdateDialog(scope.row)" type="text" size="small"><i class="el-icon-edit"></i></el-button>
                </template>
            </el-table-column>
        </el-table>
        <van-popup v-model="updatePopupVisible" position="right">
            <update-weight-popup-content
              :onCancel="handleToggleUpdateDialog"
              :onOk="handleSave"
            />
        </van-popup>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import UpdateWeightPopupContent from '@/components/WeightManager/UpdateWeightPopupContent'

export default {
    data() {
        return {
            updatePopupVisible: false,
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
            this.$dialog.confirm({
              message: '确认删除？删除后不可恢复'
            }).then(() => {
              this.$store.dispatch('deleteWeightRecord', record._id)
              this.$toast.success('删除成功')
            }).catch(() => {
              this.$toast.fail('取消删除')
            })
        },
        handleOpenUpdateDialog(updatingRecord) {
            this.updatingRecord = updatingRecord
            setTimeout(() => {
              this.handleToggleUpdateDialog()
            }, 100)
        },
        handleToggleUpdateDialog() {
            this.updatePopupVisible = !this.updatePopupVisible
        },
        handleSave(newWeightRecord) {
            this.updateWeightRecord({ ...newWeightRecord, id: this.updatingRecord._id })
            this.handleToggleUpdateDialog()
        }
    },
    components: {
        UpdateWeightPopupContent
    }
}
</script>
