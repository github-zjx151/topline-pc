<template>
  <div class="login">
    <div class="login-warp">
      <div class="login-header">
        <img src="./images/logo_index.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form ref="form" :model="form" :rules="rules">
        <!-- 手机 -->
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-row>
            <el-col :span="14">
              <el-input
                v-model="form.code"
                placeholder="请输入验证码"
              ></el-input>
            </el-col>
            <el-col :span="8" :offset="2">
              <el-button class="code-btn" :disabled="isDisabled" @click="getCode">{{btnText}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="form.checked"></el-checkbox>
          <span class="agree">
              我已阅读并同意
              <a href="javascript:vpid(0)">用户协议</a>和<a href="javascript:vpid(0)">隐私条款</a>
          </span>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="login-btn" @click="submitForm('form')" v-loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单元素
      form: {
        mobile: '13911111111',
        code: '246810',
        checked: false
      },
      // 表单验证
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: '(((13[0-9])|(14[57])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|190|197|196|192)[0-9]{8})', message: '手机号错误', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: '6', message: '验证码错误', trigger: 'blur' }
        ],
        checked: [{ pattern: /true/, message: '必须勾选协议', trigger: 'change' }]
      },
      // 获取验证码状态
      isDisabled: false,
      // 验证码文字
      btnText: '获取验证码',
      // 登录加载状态
      loading: false
    }
  },
  methods: {
    // 对整体表单进行效验
    submitForm (form) {
      this.$refs[form].validate(valid => {
        // 按钮验证,form表单全部验证成功,才返回true,此时发送请求
        if (valid) {
          this.loading = true
          this.$http({
            method: 'post',
            url: '/mp/v1_0/authorizations',
            data: this.form
          }).then(res => {
            // 登录成功提示
            this.$message.success('登录成功')
            // 登录成功把获取的数据保存到本地缓存
            window.localStorage.setItem('userinfo', JSON.stringify(res.data.data))
            // 跳转到home组件
            this.$router.push('/home')
          }).catch(err => {
            window.console.log(err)
            this.loading = false
          })
        } else {
          window.console.log('登录失败')
          return false
        }
      })
    },
    // 获取验证码
    getCode () {
      this.isDisabled = true
      this.btnText = '60s后重新获取'
      let miao = 60
      const timer = setInterval(() => {
        miao--
        this.btnText = miao + 's后重新获取'
        if (miao === 0) {
          this.btnText = '获取验证码'
          // 停止计时器
          clearInterval(timer)
          // 开启获取验证码按钮
          this.isDisabled = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: url(./images/login_bg.jpg) no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-warp {
    width: 560px;
    height: 360px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 40px;
    .login-header {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 200px;
      }
    }
    .code-btn {
        width: 100%;
    }
    .agree {
        margin-left: 10px;
    }

    .login-btn {
        width: 100%;
    }

  }
}
</style>
