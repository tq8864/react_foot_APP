import React from 'react';
import '../assets/css/public/style.css';
import '../assets/css/personal/Content.module.css';
import querystring from "query-string"

export default class Content extends React.Component{
    state={
        content:{}
    };

    componentDidMount(){
        let num = this.props.location.pathname.substr(-1,1);
        let dataName = querystring.parse(this.props.location.search).dataName;
        React.axios({
            url:`/api/follow/${num}`,
        }).then(
            res=>{
                console.log(num)
                return this.setState({content:res.data.data[0]})
            }
        )
    }

  render(){
        let {content} = this.state;
        console.log(content)
        let el = null;
		
		if(content.content){
			el=(
                <div className="content_">
                    <div className="content_1">
                        <header data-am-widget="header" className="am-header am-header-default header">
                        <div className="am-header-left am-header-nav">
                            <a> 
                            <i className="am-header-icon am-icon-angle-left" onClick={()=>this.props.history.go(-2)}></i>
                            </a>
                        </div>
                        <h1 className="am-header-title"> <a style={{color:'#333'}}>厨房妈妈</a></h1>
                        <div className="am-header-right am-header-nav">
                        <a></a>
                        </div>
                        </header>
                        <div className="content">
                        <h1>{content.title}</h1>
                        <div className="text"><span className="fl">{content.time}</span><span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;浏览174</span></div>
                        <p> {content.content}</p>
                        <p> {content.content}</p>
                        <p> {content.content}</p>
                        <p>  止咳防晕－芒果汁</p>
                        <p>  退火利尿－椰子汁</p>
                        <p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
                        <p>  水果之王－奇异果汁</p>
                        </div>
                        <div data-am-widget="duoshuo" className="am-duoshuo am-duoshuo-default" data-ds-short-name="amazeui">
                            <div className="ds-thread" >
                            </div>
                        </div>
                    </div>
                </div>
            )
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
 
 
 
 /*<template>
    <div class="content_">
        <div class="content_1" v-if='content._id'>
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
            <div class="content">
            <h1>{{content.title}}</h1>
            <div class="text"><span class="fl">{{content.time}}</span><span class="fr"><i class="am-icon-thumbs-o-up"></i>&nbsp;浏览174</span></div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{content.content}}</p>
            <p> {{content.content}}</p>
            <p> {{content.content}}</p>
            <br />
            <p>  止咳防晕－芒果汁</p>
            <p>  退火利尿－椰子汁</p>
            <p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
            <p>  水果之王－奇异果汁</p>
            </div>
            <div data-am-widget="duoshuo" class="am-duoshuo am-duoshuo-default" data-ds-short-name="amazeui">
                <div class="ds-thread" >
                </div>
            </div>
        </div>
        <div v-else class="gujia">
            <van-skeleton title :row="3" />
            <van-skeleton title :row="3" />
            <van-skeleton title :row="3" />
            <van-skeleton title :row="3" />
            <van-skeleton title :row="3" />
            <van-skeleton title :row="3" />
        </div>
    </div>
</template> 

<script>
import $ from 'jquery';

export default{
    props:['id'],
	methods:{
		goback(){
			this.$router.go(-1)
		}
    },
    data(){
        return{
            content:{},
        }
    },
    mounted(){
        axios({
			url:'/api/follow'+'/'+this.$route.params.id
		}).then(
			res=>this.content = res.data.data[0]
		)
	},
    
}
</script>

<style scoped>
.content_ >>> .gujia{margin-top:2rem;}
.content p{font:2rem/2.5rem  "";}
body .content_{background-color:#fafafa;z-index: 2;}
@import url('/public/css/amazeui.min.css');
@import url('../assets/css/style.css');
</style>*/