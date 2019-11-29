import React from 'react';
import '../assets/css/personal/Search.module.css';
import ListHome from "../library/list_home/List_home";


export default class Search extends React.Component{
	state={
		list:[]
	};
	constructor(props){
		super();
		React.axios({
		  url:'/api/home',
		  params:{
			_page:1,
			_limit:10
		  }
		}).then(
		  res=>this.setState({list:res.data.data})
		)
	  }
  render(){
    return(
     <div className="search_">
       <header data-am-widget="header" className="am-header am-header-default header">
		<div className="am-header-left am-header-nav">
		     <a> 
		       <i className="am-header-icon am-icon-angle-left" onClick={()=>this.props.history.go(-1)}></i>
		     </a>
		</div>
		<h1 className="am-header-title"><a style={{color:'#333'}} >厨房妈妈</a></h1>
		<div className="am-header-right am-header-nav">
		     <a> </a>
		</div>
	  	</header>
	  	<div className="search-input">
	  	  <input type="text" placeholder="请输入您搜索的内容" />
		</div>
		<ul className="paixu">
			<li><a href="">默认</a></li>
			<li><a href="">销量</a></li>
			<li><a href="">价格</a></li>
		</ul>
		<ListHome history={this.props.history} list={this.state.list} dataName="search"/>
     </div>
    )
  }
}




/*<template>
    <div class="search_">
       <header data-am-widget="header" class="am-header am-header-default header">
		<div class="am-header-left am-header-nav">
		     <a @click="goback" class=""> 
		       <i class="am-header-icon am-icon-angle-left"></i>
		     </a>
		</div>
		<h1 class="am-header-title"> <a href="#title-link" class="" style="color: #333;">厨房妈妈</a></h1>
		<div class="am-header-right am-header-nav">
		     <a href="#right-link" class=""> </a>
		</div>
	  	</header>
	  	<div class="search-input">
	  	  <input type="text" placeholder="请输入您搜索的内容" />
		</div>
		<ul class="paixu">
			<li><a href="">默认</a></li>
			<li><a href="">销量</a></li>
			<li><a href="">价格</a></li>
		</ul>
    </div>
</template> 

<script>
import Lists from '../components/Lists'
// import axios from '../plugins/axios';


export default{
	data(){
		return{
			list:[]
		}
	},
	components:{
		Lists,
	},
	methods:{
		goback(){
			this.$router.go(-1)
		}
	},
	mounted(){
		axios({
		url:"/api/home",
		params:{_page:1,_limit:10}
	}).then(
		res=>this.list=res.data.data
	)
	}
}
</script>

<style>
@import url('/public/css/amazeui.min.css');
@import url('../assets/css/style.css');
</style>*/