<!-- 注册 -->
<template>
  <div
    class="registered"
    :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="registered-form">
      <div class="form-top">
        <img src="@/assets/images/logo.jpg" alt="" />
        <span>注册</span>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="returnLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { nameIsExist,adminRegistered } from "@a/registered.js"
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("名称不能为空！"));
      }else{
        this.nameIsExist(value).then(res=>{
          callback()
        }).catch((error)=>{
          callback(new Error("名称重复！"));
        })
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码！"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      backgroundImage: require("../../assets/images/registered.jpg"),
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }],
      },
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          adminRegistered(this.ruleForm).then(res=>{
            const h = this.$createElement;
            this.$msgbox({
              title: '注册成功',
              message: h('p', null, [
                h('span', null, '账号为： '),
                h('i', { style: 'color: teal' }, res.id),
                h('div',{style:'color:red;font-size:12px'},'点击确定后会跳转登录页...')
              ]),
              showCancelButton: false,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = '跳转中...';
                  setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 1000);
                } else {
                  done();
                }
              }
            }).then(action => {
              this.$router.push('/login')
            });
          }).catch(error=>{
            console.log(error)
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    returnLogin() {
      this.$router.push("/login");
    },

    // 姓名是否存在
    nameIsExist(name){
      return new Promise((resolve,reject)=>{
        nameIsExist({
          name:name,
        }).then(res=>{
          resolve(res)
      }).catch(error=>{
          reject(error)
      })
      })
    }
  },

};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
</style>