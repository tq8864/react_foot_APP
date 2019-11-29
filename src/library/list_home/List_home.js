import React from 'react';
import './list_home.css';


let goDetail = (num,dataName,history) => {
    history.push({pathname:'/detail/'+num,search:'?dataName='+dataName})
};
let go = history.go(-1);
// list,dataName,history,num
export default ({list,dataName,history})=>(
    <div className="ListHome_">
        <ul data-am-widget="gallery" className="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
            {
                list.map(item=>(
                    <li key={item.num} onClick={()=>goDetail(item.num,dataName,history)}>
                        <div className="am-gallery-item">
                            <a onClick={go}>
                                <img src={require("../../assets/img/p.png")}  alt=""/>
                                <h3 className="am-gallery-title">{item.name}</h3>
                                <div className="am-gallery-desc">
                                <em>￥{item.price}</em><i className="am-icon-cart-plus"></i>
                                </div>
                            </a>
                        </div>
                    </li>
                ))
            }
        </ul>
        <div className="footer_bottom"></div>
    </div>
)









// class ListHome extends React.Component{
    
//     goDetail = (num,dataName) => {
//         this.props.history.push({pathname:'/detail/'+num,search:'?dataName='+dataName})
//     };
//     render(){
//         let {list,dataName,num} = this.props;
//         console.log(dataName)
//          return(
//             <div className="ListHome_">
//                 <ul data-am-widget="gallery" className="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
//                     {
//                         list.map(item=>(
//                             <li key={item.num} onClick={()=>this.goDetail(item.num,dataName)}>
//                                 <div className="am-gallery-item">
//                                     <a onClick={this.goDetail}>
//                                         <img src={require("../../assets/img/p.png")}  alt=""/>
//                                         <h3 className="am-gallery-title">{item.name}</h3>
//                                         <div className="am-gallery-desc">
//                                         <em>￥{item.price}</em><i className="am-icon-cart-plus"></i>
//                                         </div>
//                                     </a>
//                                 </div>
//                             </li>
//                         ))
//                     }
//                 </ul>
//                 <div className="footer_bottom"></div>
//                 {/* <li>
//                     <div className="am-gallery-item">
//                         <a onClick={this.goDetail}>
//                             <img src={require("../../assets/img/p.png")}  alt=""/>
//                             <h3 className="am-gallery-title">商务单人餐</h3>
//                             <div className="am-gallery-desc">
//                             <em>￥50</em><i className="am-icon-cart-plus"></i>
//                             </div>
//                         </a>
//                     </div>
//                 </li> */}
//             </div>
//        )
//    }
// }