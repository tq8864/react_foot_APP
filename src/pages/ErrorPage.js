import React from 'react';
import '../assets/css/personal/ErrorPage.module.css'

export default class ErrorPage extends React.Component{
  render(){
    return(
     <div className="errorpage_">
       <h3>页面未找到！   ErrorPage</h3>
     </div>
    )
  }
}


/* <template>
    <div class="error">
         <div>
            <img src="../assets/img/404.jpg">
            <h1>页面未找到！</h1>
            <router-link to="/home" tag="button">
            返回首页 
            </router-link>
         </div>   
    </div>
 </template>

 
 <style scoped>
    body{background:#fff; z-index: 100;height:100%;}
    .error{ height:100%; width:100% }
    .error img{width:300px;height:300px;position:fixed;top:50%;left:50%;margin-top:-250px;margin-left:-150px;}
    .error button{
        height:50px;
        width:140px;
        position:absolute;
        top:50%;
        left:50%;
        margin-top:125px;
        margin-left:-70px;
        font:20px/22px "";
        border:1px solid rgb(207, 207, 207);
        border-radius: 5px;
        background:#fff;
        }
    .error h1{
        font:700 24px/26px "";
        color:#333;
        position:absolute;
        top:50%;
        left:50%;
        margin-top:67px;
        margin-left:-60px;
    }
 </style>*/
