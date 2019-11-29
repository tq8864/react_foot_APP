import React from 'react';
import '../assets/css/personal/We.css';
import SwiperSpeack from '../library/swiper_speak/Swiper_speak';
import { Toast, WingBlank, Button , Tabs, WhiteSpace } from 'antd-mobile';
// import { createForm } from 'rc-form';

// export default class We extends React.Component{

//   render(){
//     return(
//      <div className="we_">
//         <div className="am-tabs qiehuan" data-am-tabs>
//           <ul className="am-tabs-nav am-nav am-nav-tabs">
//             <li className="am-active"><a href="#tab1">店铺介绍</a></li>
//             <li><a href="#tab2">建议留言</a></li>
//           </ul>
//           <div className="am-tabs-bd">
//             <div className="am-tab-panel am-fade am-in am-active" id="tab1">
//                 妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
//               {/* <iframe src="map.html " width="100%" height="100%"></iframe>
//                */}
//             </div>
//             <div className="am-tab-panel am-fade" id="tab2">
//                 <input type="text" placeholder="姓名" className="tab-input" />
//                 <input type="text" placeholder="电话" className="tab-input" />
//                 <textarea placeholder="建议" className="tab-input"></textarea>
//                 <button type="button" className="tab-btn">提交</button>
//             </div>
//           </div>
// 		    </div>
//      </div>
//     )
//   }
// }



export default class We extends React.Component{

  render(){
  let  tabs = [
      { title: '店铺介绍' },
      { title: '建议留言' },
    ];
    return(
     <div className="we_">
       <SwiperSpeack/>
        <WhiteSpace/>
          <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false} activeTab={1}>
            <div className="we_content" style={{ display: 'flex', paddingTop:'1rem',paddingLeft:'1.2rem',paddingRight:'1.2rem', height: '250px', backgroundColor: '#fff' }}>
                妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              <div className="am-tab-panel" id="tab2" style={{padding:'1rem'}}>
                  <input type="text" placeholder="姓名" className="tab-input" />
                  <input type="number" placeholder="电话" className="tab-input" />
                  <textarea placeholder="建议" className="tab-input"></textarea>
                  {/* <button type="button" className="tab-btn" style={{background:"#108ee9"}}>提交</button> */}
                  <Button onClick={this.successToast} className="button_we" >提交</Button>
              </div>
            </div>
          </Tabs>
        <WhiteSpace />
     </div>
    )
  }
  successToast=()=>{
    Toast.success('提交成功', 1);
  }
}











/* <template>
    <div class="we">
        <!-- <iframe src="" width="100%" height="100%"></iframe> -->
        <!-- <div class="am-tabs qiehuan" data-am-tabs>
            <ul class="am-tabs-nav am-nav am-nav-tabs">
            <li class="am-active"><a href="#tab1">店铺介绍</a></li>
            <li><a href="#tab2">建议留言</a></li>
            </ul>
            <div class="am-tabs-bd">
            <div class="am-tab-panel am-fade am-in am-active" id="tab1">
                    妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
                <BdMap width="100%" height="100%"></BdMap>
            </div>
            <div class="am-tab-panel am-fade" id="tab2">
                    <input type="text" placeholder="姓名" class="tab-input" />
                    <input type="text" placeholder="电话" class="tab-input" />
                    <textarea placeholder="建议" class="tab-input"></textarea>
                    <button type="button" class="tab-btn">提交</button>
            </div>
            </div>
		</div> -->
        
        <van-tabs @click="onClick" class="am-tabs qiehuan" data-am-tabs>
        <van-tab title="店铺介绍">
            <div class="am-tab-panel am-fade am-in am-active" id="tab1">
                妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
            <BdMap width="100%" height="100%"></BdMap>
            </div>
        </van-tab>
        <van-tab title="建议留言" >
            <input type="text" placeholder="姓名" class="tab-input" />
            <input type="text" placeholder="电话" class="tab-input" />
            <textarea placeholder="建议" class="tab-input"></textarea>
            <button type="button" class="tab-btn" >提交</button>
            
        </van-tab>
        </van-tabs>
    </div>
</template> 

<script>
import BdMap from './BdMap';

export default {
    components:{
		  BdMap,
      },
      methods: {
            onClick(name, title) {
            this.$toast(title);
            }
      },
      
};

</script>

<style>
@import url('/public/css/amazeui.min.css');
@import url('../assets/css/style.css');
</style>*/
