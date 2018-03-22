<template>
    <el-dialog
            title="更新"
            :visible=true
            width="30%"
    >
        <el-form label-width="80px">
            <el-form-item label="日期">
                <el-date-picker
                        style="width: 180px"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy/MM/dd"
                        value-format="yyyy/MM/dd"
                        v-model="record.date"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label="体重">
                <el-input-number
                        controls-position="right"
                        :min="1"
                        :max="200"
                        v-model="record.weight"
                ></el-input-number>
            </el-form-item>
            <el-form-item label="标签">
                <el-radio-group
                        v-model="record.tag"
                        size="mini"
                        style="width: 180px"
                >
                    <el-radio-button label="CL"></el-radio-button>
                    <el-radio-button label="DTT"></el-radio-button>
                    <el-radio-button label="ZK"></el-radio-button>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <span slot="footer">
            <el-button @click="onCancel">取 消</el-button>
            <el-button type="primary" @click="handleSave">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: 'update-weight-dialog',
        data() {
            return {
                record: { ...{}, ...this.weightRecord }
            }
        },
        props: {
            weightRecord: Object,
            onOk: Function,
            onCancel: Function
        },
        methods: {
            handleSave() {
                this.onOk(this.record)
            }
        }
    }
</script>

<style scoped>

</style>