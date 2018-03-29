<template>
  <div>
    <van-nav-bar
      title="TCL"
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
        <van-button
          class="footer-button"
          bottom-action
          @click="handleToggleUpdatePopupVisible"
        >
          添加
        </van-button>
      </van-col>
    </van-row>
    <van-popup v-model="updatePopupVisible" position="right" :overlay="true">
      <update-weight-popup-content
        :onCancel="handleToggleUpdatePopupVisible"
        :onOk="handleSave"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Home from 'components/Home'
import UpdateWeightPopupContent from '@/components/WeightManager/UpdateWeightPopupContent'

export default {
  name: 'Layout',
  components: { Home, UpdateWeightPopupContent },
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
    handleLinkToQr() {
      this.$router.push({ path: '/qr-code' })
    },
    handleLinkToWeightManager() {
      this.$router.push({ path: '/weightManager' })
    },
    handleRouterBack() {
      this.$router.back()
    },
    handleToggleUpdatePopupVisible () {
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
</style>
