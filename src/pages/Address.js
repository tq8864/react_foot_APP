import React from 'react';
import '../assets/css/personal/Address.module.css'

export default class Address extends React.Component{
  render(){
    return(
     <div className="address">
       <h3>address</h3>
     </div>
    )
  }
}










/*<template>
    <div class="address_">
        <van-nav-bar
        title="收货地址"
        left-text="返回"
        left-arrow
        @click-left="goback"
        />
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

  methods: {
    onAdd() {
      alert('新增地址');
    },

    onEdit(item, index) {
      url:'./Write.vue'
    },
    goback(){
			this.$router.go(-1)
    }
  }
}
</script>*/
