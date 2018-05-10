<template>
  <div>
    <van-nav-bar
      title="TTCL"
      left-text="返回"
      left-arrow
      @click-left="handleRouterBack"
    />
    <van-row style="height: calc(100vh - 96px)">
      <slot/>
    </van-row>
    <van-row>
      <van-col span="8">
        <van-button
          bottom-action
          class="footer-button"
          @click="handleLinkToQr"
        >
          二维码
        </van-button>
      </van-col>
      <van-col span="8">
        <van-button
          bottom-action
          class="footer-button"
          @click="handleLinkToWeightManager"
        >
          体重
        </van-button>
      </van-col>
      <van-col span="8">
        <el-dropdown>
          <van-button
            class="footer-button"
            bottom-action
          >
            更多
          </van-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button
                type="text"
                @click="handleToggleUpdatePopupVisible"
              >
                添加
              </el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-button
                type="text"
                @click="handleLinkToRubikCube"
              >
                秒表
              </el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </van-col>
    </van-row>
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

  import { getDefaultRecord } from '@/components/WeightManager/UpdateWeightPopupContentService'

  import Home from 'components/Home'
  import UpdateWeightPopupContent from '@/components/WeightManager/UpdateWeightPopupContent'

  export default {
    name: 'Layout',
    components: {Home, UpdateWeightPopupContent},
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
      handleLinkToQr() {
        this.$router.push({path: '/qr-code'})
      },
      handleLinkToWeightManager() {
        this.$router.push({path: '/weightManager'})
      },
      handleLinkToRubikCube() {
        this.$router.push({path: '/rubikCube'})
      },
      handleRouterBack() {
        this.$router.back()
      },
      handleToggleUpdatePopupVisible() {
        this.updatePopupVisible = !this.updatePopupVisible
      },
      handleSave(newWeightRecord) {
        this.addNewWeightRecord(newWeightRecord)
        this.handleToggleUpdatePopupVisible()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .footer-button {
    color: white;
    background-color: #afd4ee;
  }

  .el-dropdown {
    width: 100%;
  }
</style>
