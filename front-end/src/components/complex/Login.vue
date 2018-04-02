<template>
  <div class="login-container">
    <div class="form-container">
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-width="100px"
        class="form"
      >
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-button"
            @click="handleConfirmLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <vue-particles color="#dedede"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    handleConfirmLogin () {
      this.login(this.form)
    }
  }
}
</script>

<style scoped>
  .login-container {
    overflow: hidden;
    background-color: #010d2d;
  }
  #particles-js {
    width: 100%;
    height: 100vh;
  }
  .form-container {
    width: 80vw;
    position: absolute;
    left: 10vw;
    top: 50vh;
  }
  .login-button {
    width: 100%;
  }
</style>
