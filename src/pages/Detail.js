import React from 'react';
import '../assets/css/personal/Detail.css';
import ListDetail from '../library/list_detail/ListDetail';
import querystring from 'query-string'


export default class Detail extends React.Component{
	state={
		detail:{}
	};
	componentDidMount(){
		let num=parseInt(this.props.location.pathname.substr(-1,1));
		console.log(num);
		// let dataName=querystring.parse(this.props.location.search).dataName;
		// console.log(dataName)
		React.axios({
			url:`/api/home/${num}`,
		}).then(
			
			res=>{
				// console.log(res.data)
				return this.setState({detail:res.data.data[0]})}
		)
	}
	render(){
	  	let detail = this.state
		let el = null;
		if(detail.detail.num){
			el=(
				<div className="Detail">
				<header data-am-widget="header" className="am-header am-header-default header" id="header">
					<div className="am-header-left am-header-nav">
						<a > 
						<i className="am-header-icon am-icon-angle-left" onClick={()=>this.props.history.go(-1)}></i>
						</a>
					</div>
				</header>
				<ListDetail/>
				<div className="detail" v-if="detail._id">
						<h2>{this.state.detail.name}</h2>
						<div className="price">
						<b>￥{this.state.detail.price}</b><span>（积分可抵扣5元）</span>
						</div>
						<div className="kucun">
							<p>库存：1000</p>
							<p>运费：免运费</p>
						</div>
					</div>
					<div className="comment">
						<h2>宝贝评价（0）</h2>
						<ul>
							<li><a>有图（0）</a></li>
							<li><a>好评（0）</a></li>
							<li><a>中评（0）</a></li>
							<li><a>差评（0）</a></li>
						</ul>
					</div>
					<div className="detail-con">
						<p>  排毒排便－香蕉牛奶汁</p>
						<p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p>
						<br />
						<br />
						<p>  止咳防晕－芒果汁</p>
						<p>  退火利尿－椰子汁</p>
						<p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
						<p>  水果之王－奇异果汁</p>
						<img src={require("../assets/img/banner.jpg")} alt=""/>
					</div>
					<div className="h50"></div>
					<ul className="fixed-btn">
						<li ><a className="current">立即购买</a></li>
						<li><a>加入购物车</a></li>
					</ul>
			</div>
			);
		}else{
			el=(
				<div>
					<div>骨架屏</div>
					<div>骨架屏</div>
					<div>骨架屏</div>
					<div>骨架屏</div>
					<div>骨架屏</div>
				</div>
			);
		}
		return el;
    
  }
} 
 

{/* <script>
import Swipe from '../assets/js/swipe.js';
import $ from 'jquery';

export default{
	props:['id','dataName'],
	data(){
		return{
			detail:{},
		}
	},
	mounted(){
		window.mySwipe =new Swipe($("#mySwipe")[0], {
		startSlide: 0,
		auto: 3000,
		continuous: true,
		disableScroll: true,
		stopPropagation: true,
		callback: function(index, element) {},
		transitionEnd: function(index, element) {}
	});
		axios({
			url:'/api/'+this.$route.query.dataName+'/'+this.$route.params.id
		}).then(
			res=>this.detail = res.data.data[0]
		)
	},
	methods:{
		goback(){
			this.$router.go(-1)
		}
	}
}
</script> */}

{/* <style scoped>
.swipe {
		overflow: hidden;
		visibility: hidden;
		position: relative;
	}
	.swipe-wrap {
		overflow: hidden;
		position: relative;
	}
	.swipe-wrap > div {
		float:left;
		width:100%;
		position: relative;
	}
	img{
		width:100%;
	}

.comment ul li {width:21%;border-radius: 0;}

.am-slides{height:31rem;}
.am-slides li{float:left;}

.detail_  header{background-color:rgba(0,0,0,0.1);position:absolute;top:0;left:0;z-index: 100;}
@import url('/public/css/amazeui.min.css');
@import url('../assets/css/style.css');
</style> */}