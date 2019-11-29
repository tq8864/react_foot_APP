import React from 'react';
import '../assets/css/personal/List.module.css'

export default class List extends React.Component{
  render(){
    return(
     <div className="list_">
		<header data-am-widget="header" className="am-header am-header-default header">
			<div className="am-header-left am-header-nav">
				<a> 
				<i className="am-header-icon am-icon-angle-left" onClick={()=>this.props.history.go(-1)}></i>
				</a>
			</div>
			<h1 className="am-header-title"> <a href="#title-link" style={{color:' #333'}}>厨房妈妈</a></h1>
			<div className="am-header-right am-header-nav">
				<a href="#right-link"> </a>
			</div>
		</header>
		<div className="communityPage-main">
			<div className="communityPage-info">
				<img className="communityPage-img" src={require("../assets/img/detail.png")}  alt=""/>
				<div>
					<p className="communityPage-title"> 饮食健康</p>
					<p className="communityPage-num"><label>话题<span className="communityPage-topic-num cmn-theme-color">0</span></label><label>回复<span className="communityPage-comment-num cmn-theme-color">0</span></label></p>
				</div>
			</div>
			<div className="communityPage-topic cmn-theme-color-active" id="communityPage-topic"><a className="active">全部</a></div>
		</div>
		<div className="nokeshuo">
			<img src={require("../assets/img/none.png")}  alt=""/>
			<p>还没话题，快来说两句</p>
		</div>
		<div className="communityPage-publish-btn cmn-theme-bgcolor" id="communityPage-publish-btn"><span>发帖</span></div>
     </div>
    )
  }
}



/*<template>
    <div class="list_">
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
	  	<div class="communityPage-main">
	  	<div class="communityPage-info">
	  		<img class="communityPage-img" src="../assets/img/detail.png">
	  		<div>
	  			<p class="communityPage-title"> 饮食健康</p>
	  			<p class="communityPage-num"><label>话题<span class="communityPage-topic-num cmn-theme-color">0</span></label><label>回复<span class="communityPage-comment-num cmn-theme-color">0</span></label></p>
	  		</div>
	  	</div>
	  	<div class="communityPage-topic cmn-theme-color-active" id="communityPage-topic"><a class="active">全部</a></div>
	  	</div>
	  	<div class="nokeshuo">
	  	<img src="../assets/img/none.png" />
	  	<p>还没话题，快来说两句</p>
	  	</div>
	  	<div class="communityPage-publish-btn cmn-theme-bgcolor" id="communityPage-publish-btn"><span>发帖</span></div>
    </div>
</template> 

<script>
export default {
	methods:{
		goback(){
			this.$router.go(-1)
		}
	}
}
</script>

<style>

</style>script

<style scoped>
@import url('/public/css/amazeui.min.css');
@import url('../assets/css/style.css');
</style>*/