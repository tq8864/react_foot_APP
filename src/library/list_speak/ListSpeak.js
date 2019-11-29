import React from 'react';
import './ListSpeak.css'
import { Link, withRouter} from 'react-router-dom';

class ListSpeak extends React.Component{
	goDetail = (num,dataName) => {
        this.props.history.push({pathname:'/content/'+num,search:'?dataName='+dataName})
    };
   render(){
	   let {list,dataName,num} = this.props;
	//    console.log(dataName)
       return(
        <div className="ListHome_">
            {
				list.map(item=>(
					<div className="am-g am-intro-bd"  key={item.num} onClick={()=>this.goDetail(item.num,dataName)}>
						<Link to="/content/1" key={item.num}>
							<div className="am-intro-left am-u-sm-3"><img src={require("../../assets/img/p.png")} alt="" /></div>
							<div className="am-intro-right am-u-sm-9">
								<h2>{item.title}</h2>
								<p>{item.content}</p>
								<div className="texts">
									<span className="fl">{item.time}</span>
									<span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
								</div>
							</div>
						</Link>
					</div>
				))
			}
		    {/* <div className="am-g am-intro-bd">
		    	<Link to="/content/1">
			        <div className="am-intro-left am-u-sm-3"><img src={require("../../assets/img/p1.png")} alt=""/></div>
			        <div className="am-intro-right am-u-sm-9">
			        	<h2>五种果汁喝出美丽</h2>
			        	<p>吐血推荐5款让你喝出健康的果汁</p>
			        	<div className="texts">
			        		<span className="fl">2017-5-23</span>
			        		<span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
			        	</div>
			        </div>
		       </Link>
		    </div> */}
            <div className="footer_bottom"></div>
        </div>
       )
   }
}
export default withRouter(ListSpeak)