<template>
  <div class="update-weight-popup-content">
    <el-form label-width="80px">
      <el-form-item label="日期">
        <el-date-picker
          v-model="record.date"
          style="width: 180px"
          type="date"
          placeholder="选择日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="体重">
        <el-input-number
          v-model="record.weight"
          controls-position="right"
          :min="1"
          :max="200"
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
      <el-form-item>
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
        name: 'update-weight-popup-content',
        data() {
            return {
                record: { ...{}, ...this.defaultRecord }
            }
        },
        props: {
            defaultRecord: {
              type: Object,
              default: function() {
                return {tag: 'CL', date: moment().format('YYYY-MM-DD'), weight: '100'}
              }
            },
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
  .update-weight-popup-content {
    width: calc(100vw - 120px);
    height: calc(100vh - 80px);
    padding: 40px;
  }

</style>
