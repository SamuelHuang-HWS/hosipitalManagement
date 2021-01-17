<!-- 登录页 -->
<template>
    <div class="login" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
        <div class="login-topper">
            <img src="@/assets/images/logo.jpg" alt=""> 医院管理系统
        </div>
        <div class="login-body">
            <div class="login-body-form">
                <div class="icon">
                    <img src="@/assets/images/logo.jpg" alt="">
                </div>
                <div class="form">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item prop="id">
                            <el-input v-model.number="ruleForm.id" placeholder="请输入账号或用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"
                                      placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="foot">
                    <div @click="forgetPass">忘记密码？</div>
                    <div @click="goRegistered">注册新账号</div>
                </div>
            </div>
        </div>
        <div class="login-footer">
            <span @click="aboutManage">关于系统</span>
            <span>|</span>
            <span @click="aboutMe">联系我</span>
        </div>
    </div>
</template>

<script>
    import {alert} from "../../utils/tools";
    import {loginCheck,loginRoleInfo} from "../../api/login";
    import {setToken} from "../../utils/cookie";
    export default {
        name: "login.vue",
        data() {
            let checkId = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('账号或用户名不能为空！'));
                } else {
                    callback()
                }
            };
            let checkPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空！'));
                } else {
                    callback();
                }
            };
            return {
                backgroundImage: require("../../assets/images/login.png"),
                ruleForm: {
                    pass: '',
                    id: ''
                },
                rules: {
                    pass: [
                        {validator: checkPass, trigger: 'blur'}
                    ],
                    id: [
                        {validator: checkId, trigger: 'blur'}
                    ]
                }
            };
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
        },
        methods: {
             submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        console.log(this.ruleForm);
                        try {
                            let res = await loginCheck(this.ruleForm);
                            if(res){
                                setToken(res.token);
                                this.$message.success(res.msg);
                            }
                            let info = loginRoleInfo()
                        }catch (e) {
                            this.$message.error("账号或密码错误！")
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            goRegistered() {
                this.$router.push('/registered')
            },
            forgetPass() {
                alert(this, '暂时不支持线上密码找回，请联系管理员帮忙哈！', '忘记密码', '确定')
            },
            aboutManage() {
                alert(this, '本系统用于毕业设计简单实践，欢迎指出问题！', '关于系统', '了解')
            },
            aboutMe() {
                alert(this, '本人邮箱 1178975282@qq.com，欢迎骚扰！', '联系Me', '了解')
            }
        }
    };
</script>
<style scoped>
    /* @import url(); 引入css类 */
</style>