import React from 'react';
import '../assets/css/personal/BdMap.module.css'

export default class BdMap extends React.Component{
  // mounted(){
  //     var  map = new BMap.Map("allmap");
  //     var point = new BMap.Point(121.4981147355,31.3843789060);
  //     map.centerAndZoom(point, 18);
  //     var marker = new BMap.Marker(point);  // 创建标注
  //     map.addOverlay(marker);               // 将标注添加到地图中
  //     marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
  // }
  render(){
    return(
     <div className="bdmap_">
       <div id="allmap" style="height:30rem"></div>
     </div>
    )
  }
}
 
 
 
 
 /*<template>
    <div class="map_">
        <div id="allmap" style="height:200px"></div>
    </div> 
 </template>

<script>
export default {
    mounted(){
	    var  map = new BMap.Map("allmap");
        var point = new BMap.Point(121.4981147355,31.3843789060);
        map.centerAndZoom(point, 18);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    }
}
</script>*/