import React from 'react';
import './Swiper_speak.moudle.css';

import $ from 'jquery';
import Swipe from '../swipe';

import {Link} from 'react-router-dom';

export default class Swiper extends React.Component{

  componentDidMount(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }

  render(){
    return(
      <div className="banner">
        <ul className="clearfix">
          <li>
            <Link to="/detail/2">
              <img src={require("../../assets/img/banner3.png")} alt=""/>
            </Link>
          </li>
          <li>
            <Link to="/detail/2">
              <img src={require("../../assets/img/banner4.png")} alt=""/>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}