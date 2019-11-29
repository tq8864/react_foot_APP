import React from 'react';
import '../assets/css/personal/Speak.css';
import SwiperSpeack from '../library/swiper_speak/Swiper_speak';
import { NavLink } from 'react-router-dom';
import ListSpeak from '../library/list_speak/ListSpeak';


export default class Speak extends React.Component{
	state={
		list:[]
	};
	// constructor(props){
	// 	super();
	// }
	componentDidMount(){
		React.axios({
			url:"/api/follow",
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
     <div className="speak_">
		<SwiperSpeack/>
		<ul className="nav">
			<li>
				<NavLink to="/list">
					<img src={require("../assets/img/ms.jpg")} alt=""/>
					<p>美食快拍</p>
				</NavLink>
			</li>
			<li>
				<NavLink to="/list">
					<img src={require("../assets/img/cy.jpg")} alt=""/>
					<p>厨艺交流</p>
				</NavLink>
			</li>
			<li>
				<NavLink to="/list">
					<img src={require("../assets/img/mmp.jpg")} alt=""/>
					<p>妈妈派</p>
				</NavLink>
			</li>
			<li>
				<NavLink to="/list">
					<img src={require("../assets/img/ys.jpg")} alt=""/>
					<p>饮食健康</p>
				</NavLink>
			</li>
		</ul>
		<div data-am-widget="intro" className="am-intro am-cf am-intro-default">
			<div className="am-intro-hd">
				<h2 className="am-intro-title">功效</h2>
			</div>
		</div>
		<ListSpeak list={this.state.list} dataName="speak"/>
     </div>
    )
  }
}




/*<template>
    <div class="box">
		<Banner></Banner>
        <ul class="nav">
			<li>
				<router-link to="/list" tag="a">
					<img src="../assets/img/ms.jpg" />
					<p>美食快拍</p>
				</router-link>
			</li>
			<li>
				<router-link to="/list" tag="a">
					<img src="../assets/img/cy.jpg" />
					<p>厨艺交流</p>
				</router-link>
			</li>
			<li>
				<router-link to="/list" tag="a">
					<img src="../assets/img/mmp.jpg" />
					<p>妈妈派</p>
				</router-link>
			</li>
			<li>
				<router-link to="/list" tag="a">
					<img src="../assets/img/ys.jpg" />
					<p>饮食健康</p>
				</router-link>
			</li>
		</ul>
		<div data-am-widget="intro" class="am-intro am-cf am-intro-default">
		<div class="am-intro-hd">
			<h2 class="am-intro-title">功效</h2>
		</div>
		<List2 :list="list2" dataName="follow">
		</List2>
		</div>
    </div>
</template>

<script>
import List2 from '../components/List2'
import Banner from '../components/Banner'
// import axios from 'axios';


export default {
	data(){
	  return{
		list2:[]
	  }
  },
  components:{
	  Banner,List2
  },
	mounted(){
		axios({
		url:"/api/follow",
		params:{_page:1,_limit:10}
	}).then(
		res=>this.list2=res.data.data
		)
	},
}
</script>


<style>
	@import url('/public/css/amazeui.min.css');
	@import url('../assets/css/style.css');
</style>*/