import React from 'react';
import '../assets/css/public/Footer.module.css';
import '../assets/css/personal/Footer.css';
import { NavLink } from 'react-router-dom';

export default class App extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div data-am-widget="navbar" className="am-navbar am-cf  footer footer_ ">
                    <ul className="am-navbar-nav am-cf am-avg-sm-4">
                        <li className="home">
                            <NavLink to='/home'>
                                <span><img src={require("../assets/img/nav.png")} alt=""/></span>
                                <span className="am-navbar-label">点餐</span>
                            </NavLink>
                        </li>
                        
                        <li className="speak">
                            <NavLink to='/speak'>
                            <span><img src={require("../assets/img/nav2.png")} alt=""/></span>
                            <span className="am-navbar-label">客说</span>
                            </NavLink>
                        </li>

                        <li className="we">
                            <NavLink to='/we'>
                            <span><img src={require("../assets/img/nav3.png")} alt=""/></span>
                            <span className="am-navbar-label">我们</span>
                            </NavLink>
                        </li>

                        <li className="user">
                            <NavLink to='/user'>
                            <span><img src={require("../assets/img/nav4.png")} alt=""/></span>
                            <span className="am-navbar-label">我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}