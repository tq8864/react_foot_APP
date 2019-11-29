import React from 'react';
import '../assets/css/personal/Register.css';
import Button from '../library/Button/Button';
import Input from '../library/Input/Input';
import { Link } from 'react-router-dom';

export default class Reginster extends React.Component{
  state={
    username:'',
    password:'',
    mess:''
  }
  render(){
    return(
     <div className="register_">
       <van-uploader className="up_"/>
        <div className="head">
            <span className="head_lf"><a onClick={()=>this.props.history.go(-1)}>返回</a></span>
            用户注册
            <span className="head_rg"><Link to="/sign">登录</Link></span>
        </div>

        <div className="zhuce">
          <Input name='username' type="text" label="账 号" value={this.state.username}  onChange={this.changeIpt}/>
          <Input name='password' type="password" label="密 码" value={this.state.password} onChange={this.changeIpt}/>
            <div className="tip"><span>{this.state.mess}</span><a href="#"><input type="checkbox"/>同意注册条款</a></div>
            <Button clickHanlder={this.reg} value="注 册"/>
        </div>
     </div>
    )
  }
  changeIpt= (ev) => {
    // console.log('login changeIpt',ev.target.value)
    this.setState({
      [ev.target.name]:ev.target.value
    })
  };
  reg = () => {
    let formData = new FormData();
    formData.append('username',this.state.username),
    formData.append('password',this.state.password),
    console.log('reg',this.state.username,this.state.password)
    React.axios({
      url:'/api/reg',
      method:'post',
      data:formData
    }).then(
      // res => res.data.err === 0 ? this.props.history.push('/user') : this.state.mess = res.data.msg,
      res=>{
        if(res.data.err===1){
          this.setState({mess:res.data.msg})
        }else{
          this.props.history.push('/sign')
        }
      }
    )
  }
}




/* <template>
    <div class="register">
      <van-uploader :before-read="beforeRead" class="up_" v-model="icon"/>
        <div class="head">
            <span class="head_lf"><a @click="goback">返回</a></span>
            用户注册
            <span class="head_rg"><router-link to="/sign" tag="a">登录</router-link></span>
        </div>

        <div class="zhuce">
            <div class="text">
                <span>账号</span>
                <input type="text" placeholder="请输入昵称" class="input" v-model="username">
            </div>
            <div class="text">
                <span>密 码</span>
                <input type="text" placeholder="请输入密码" class="input" v-model="password">
            </div>
            <div class="tip"><a href="#"><input type="checkbox" checked="checked">同意注册条款</a></div>
            <div class="btndl"><input type="submit" value="注 册" @click="reg"></div>
        </div>
    </div>
</template> 

<script>
export default{
    data(){
    return {
      username:'',
      password:'',
      icon:'',
      errMess:''
    }
  },
	methods:{
		goback(){
			this.$router.go(-1)
        },
         reg(){

      let formData = new FormData();
      formData.append('username',this.username)
      formData.append('password',this.password)
      let input = document.getElementById('icon')
    //   formData.append('icon',input.files[0])
      
      axios({
        url:'/api/reg',
        method:'post',
        data: formData
      }).then(
        res=>res.data.err===0?this.$router.push('/sign'):this.errMess=res.data.msg,
        console.log(res=>'ok')
      )
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        return false;
      }
      return true;
  },
   // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    }
  }
}
</script>

<style scoped>
.register >>> .up_{position:relative;left:13rem;top:7rem;}
body {
	font-family: "Microsoft Yahei", "Calibri";
	font-size: 14px;
	background-color: #FFF;
	color:#777;
}
    @import url('../assets/css/sign_r.css');
</style>*/