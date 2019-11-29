import $ from 'jquery';
import Swipe from '../public/swipe';
// import axios from '../plugins/axios';//全局配置axios，所以不需要引入

export default {
  data(){
	  return{
		list:[]
	  }
  },
  mounted(){
	  	//轮播图
		window.mySwipe =new Swipe($("#mySwipe")[0], {
		startSlide: 0,
		auto: 3000,
		continuous: true,
		disableScroll: true,
		stopPropagation: true,
		callback: function(index, element) {},
		transitionEnd: function(index, element) {}
	});
	//获取数据库
	// axios({
	// 	url:"/api/home",
	// 	params:{_page:1,_limit:10}
	// }).then(
	// 	res=>this.list=res.data.data,
	// )
  }

}