import React from 'react';

export default class User extends React.Component{
  render(){
    let data = this.props.data;
    return(
     <div className="user_">
        <div className="box">
            <div className="member">
                <div className="member-pic">
                    <img src={require("../assets/img/default_photo.png")}  alt=""/>
                </div>
                <div className="member-infor">
                    <h5>{data.nikename}</h5>
                    <p style={{color:'red'}} onClick={this.delete}>注销</p>
                </div>
            </div>
            <ul className="member-nav">
                <li style={{width:'100%'}}><i className="am-icon-map-marker"></i><span>收货地址</span></li>
                <li style={{width:'100%'}}><i className="am-icon-newspaper-o"></i><span>我的订单</span></li>
                <li style={{width:'100%'}}><i className="am-icon-cart-arrow-down"></i><span>购物车</span></li>
                <li style={{width:'100%'}}><i className="am-icon-bell-o"></i><span>系统通知</span></li>
                <li style={{width:'100%'}}><i className="am-icon-credit-card"></i><span>会员卡</span></li>
                <li style={{width:'100%'}}><i className="am-icon-cc-mastercard"></i><span>优惠券</span></li>
                <li style={{width:'100%'}}><i className="am-icon-dollar"></i><span>积分</span></li>
            </ul>
        </div>
     </div>
    )
  }
  delete = () =>{
    React.axios({
      url:'/api/logout',
      method:'delete',
    }).then(
      res=>{
        res.data.err ===0 ? this.props.history.push('./home') : null
      }
    )
  }
}










/* <template>
    <div class="box">
        <div class="member">
			<div class="member-pic">
				<img src="../assets/img/default_photo.png"  />
				<!-- {{user.icon}} -->
			</div>
			<div class="member-infor">
                <h4>{{user._id}}</h4><p @click="logout">注销</p>
            </div>

		</div>
		<ul class="member-nav">
			<li><i class="am-icon-map-marker"></i><router-link to='/address' tag="span">收货地址</router-link></li>
			<li><i class="am-icon-newspaper-o"></i><span>我的订单</span></li>
			<li><i class="am-icon-cart-arrow-down"></i><span>购物车</span></li>
			<li><i class="am-icon-bell-o"></i><span>系统通知</span></li>
			<li><i class="am-icon-credit-card"></i><span>会员卡</span></li>
			<li><i class="am-icon-cc-mastercard"></i><span>优惠券</span></li>
			<li><i class="am-icon-dollar"></i><span>积分</span></li>
		</ul>
    </div>
</template>

<script>
export default {
	data(){
		return{
			user:{}
		}
	},
	beforeRouteEnter(to, from, next) {
    //异步条件
    axios({
      url: "/api/user"
    }).then(res =>
      res.data.err ===0 
        ? next(_this => (_this.user = res.data.data))
	    : next("/sign")
    );
  },
  methods:{
	  logout(){
	axios({
	  url: "/api/logout",
	  method:'delete'
    }).then(res =>
      res.data.err ===0 ? this.$router.push('./home'):null
    );
  }
  }

}
</script>

<style>
li{width:100%;};
.member-infor{color:#000}
@import url('/public/css/amazeui.min.css');
@import url('../assets/css/style.css');
</style> */