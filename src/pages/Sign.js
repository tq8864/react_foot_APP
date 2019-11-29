import React from 'react';
import '../assets/css/personal/Sign.css';
import '../assets/css/public/sign_r.css';
import Button from '../library/Button/Button';
import Input from '../library/Input/Input';
import { Link } from 'react-router-dom';

export default class Sign extends React.Component{
  state={
    username:'',
    password:'',
    mess:''
  }
  render(){
    return(
    <div className="sign_">
      <div className="head">
        <span className="head_lf"><a onClick={()=>this.props.history.go(-1)}>返回</a></span>
            用户登录
        <span className="head_rg"><Link to="/Register">注册</Link></span>
      </div>
      <div className="zhuce">
          <Input name='username' type="text" label="账 号" value={this.state.username}  onChange={this.changeIpt}/>
          <Input name='password' type="password" label="密 码" value={this.state.password} onChange={this.changeIpt}/>
          
          <div className="tip"><span>{this.state.mess}</span><a href="#">忘记密码？</a></div>
          <p className="errMess">
          </p>
            <Button clickHanlder={this.login} value="登 录"/>
        </div>
     </div>
    )
  }

  changeIpt= (ev) => {
    // console.log('login changeIpt',ev.target.value)
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  login = () => {
    // console.log('login',this.state.username,this.state.password)
    React.axios({
      url:'/api/login',
      method:'post',
      data:{
        username:this.state.username,
        password:this.state.password,
      }
    }).then(
      // res => res.data.err === 0 ? this.props.history.push('/user') : this.state.mess = res.data.msg,
      res=>{
        if(res.data.err===1){
          this.setState({mess:res.data.msg})
        }else{
          this.props.history.push('/user')
        }
      }
    )
  }
}


/*<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      errMess:'',
    }
  },

  methods:{
      goback(){
 			this.$router.go(-1)
    },
    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{
          username:this.username,
          password:this.password,
        }
      }).then(
        res => res.data.err === 0 ? this.$router.push('./user') : this.errMess = res.data.msg,
        
      )
    }

  }
} 
</script>*/