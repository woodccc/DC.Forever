<template>
    <div>
        <el-card>
            <h3>新增记录</h3>
            <el-form label-width="80px">
                <el-form-item label="日期">
                    <el-date-picker
                            style="width: 180px"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy/MM/dd"
                            value-format="yyyy/MM/dd"
                            v-model="newRecord.date"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="体重">
                    <el-input-number
                            controls-position="right"
                            :min="1"
                            :max="200"
                            v-model="newRecord.weight"
                    ></el-input-number>
                </el-form-item>
                <el-form-item label="标签">
                    <el-radio-group
                            v-model="newRecord.tag"
                            size="mini"
                            style="width: 180px"
                    >
                        <el-radio-button label="CL"></el-radio-button>
                        <el-radio-button label="DTT"></el-radio-button>
                        <el-radio-button label="ZK"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button @click="handleResetNewRecord()">清空</el-button>
                    <el-button @click="handleAddNewWeight" type="primary">保存</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import moment from 'moment'

const defaultNewRecord = {
  date: moment().format('YYYY/MM/DD'),
  weight: 1,
  tag: 'CL'
}

export default {
  data () {
    return {
      newRecord: { ...{}, ...defaultNewRecord }
    }
  },
  methods: {
    ...mapActions(['addNewWeightRecord']),
    handleResetNewRecord () {
      this.newRecord = { ...{}, ...defaultNewRecord }
    },
    handleAddNewWeight () {
      this.addNewWeightRecord(this.newRecord)
      this.handleResetNewRecord()
    }
  }
}
</script>
