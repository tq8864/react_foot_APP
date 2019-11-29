import React from 'react';
import ReactDom from 'react-dom';
import App from './layouts/App';

//引入通用样式
import './assets/css/public/style.css';

//引入路由
import { BrowserRouter,Route } from 'react-router-dom';

//引入axios的配置
import axios from './plugins/axios';

ReactDom.render(
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>,
    document.getElementById('root')
  );