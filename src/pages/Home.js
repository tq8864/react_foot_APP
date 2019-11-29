import React from 'react';
import "../assets/css/personal/Home.css";
import Swiper from "../library/swiper/Swiper";
import { NavLink } from 'react-router-dom';
import ListHome from "../library/list_home/List_home";

export default class Home extends React.Component{
  state={
    list:[]
  };
  constructor(props){
    super();
    React.axios({
      url:'/api/home',
      params:{
        _page:1,
        _limit:3
      }
    }).then(
      res=>this.setState({list:res.data.data})
    )
  }
  async componentDidMount(){
    // let res = await React.axios({
    //   url:'/api/home',
    //   parmas:{
    //     _page:1,
    //     _limit:10
    //   }
    // });
    // this.setState({
    //   list:res.data.data
    // })
  };
  
  render(){
    return(
     <div className="home_">
       <Swiper/>
        <NavLink to="" className="search" style={{color:'#888'}}>
          开启你的美食之旅...
        </NavLink>
        <ul className="nav">
          <li>
            <NavLink to="/search">
                <img src={require("../assets/img/icon.jpg")} alt="" />
                <p>最新推荐</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
                <img src={require("../assets/img/icon1.jpg")} alt="" />
                <p>热门菜谱</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
                <img src={require("../assets/img/icon2.jpg")} alt=""/>
                <p>人气菜肴</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
                <img src={require("../assets/img/icon3.jpg")} alt="" />
                <p>优惠券</p>
            </NavLink>
          </li>
        </ul>
        <div data-am-widget="titlebar" className="am-titlebar am-titlebar-default title" >
            <h2 className="am-titlebar-title ">   积分菜品 </h2>
            <nav className="am-titlebar-nav">
              <NavLink to="/search">
                  more &raquo;
              </NavLink>
            </nav>
		    </div>
        {/* {
          this.state.list.map(item=>(
            <ListHome key={item.num} item={item} datame="home"/>
          ))
        } */}
        <ListHome history={this.props.history} list={this.state.list} dataName="home"/>
    </div>
    )
  }
}