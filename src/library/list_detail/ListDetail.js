import React from 'react';
import './ListDetail.css';
import $ from 'jquery';
import Swipe from '../swipe';

import {Link} from 'react-router-dom';


export default class ListDetail extends React.Component{
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
                        <img src={require("../../assets/img/p2.png")} alt=""/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/detail/2">
                        <img src={require("../../assets/img/p.png")} alt=""/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}