import React from 'react';

import {Route, Redirect} from 'react-router-dom';

//数据预载

export default class  Auth extends React.Component{

  state={
    hasAuth:false,//请求是否发出过
    err:1,//是否通过
    data:{},//预载数据
  };

  componentDidMount(){

    React.axios(
      `/api/user`
    ).then(
      res=>this.setState({hasAuth:true, err:res.data.err,data:res.data.data})
    )

  }

  render(){


    let {component:Component, ...rest} = this.props;//结构组件本身

    if (!this.state.hasAuth) return null;

    return <Route render={routeProps=>(
      this.state.err === 0?
        <Component { ...rest } {...routeProps } data={this.state.data} /> : //data = 预载的数据，props的形式传给目标组件
        <Redirect to="/sign" />
    )} />

  }

}

