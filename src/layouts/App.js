import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import pubsub from 'pubsub-js';

//预编译
import Footer from "./Footer";
import Address from "../pages/Address";
import BdMap from "../pages/BdMap";
import Content from "../pages/Content";
import Detail from "../pages/Detail";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import List from "../pages/List";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Sign from "../pages/Sign";
import Speak from "../pages/Speak";
import User from "../pages/User";
import We from "../pages/We";
import Write from "../pages/Write";
import Loading from '../library/loding/Loding';
import Auth from '../guard/Auth';


export default class App extends React.Component{
    state={
        bFoot:true,
        bLoading:false
    };
    constructor(props){
        super();
        //订阅
        pubsub.subscribe('UPDATE_LOADING',(mess,data)=>{
            this.setState({bLoading:data})
        })
    }
    static getDerivedStateFromProps(nextProps,nextState){
        let path = nextProps.location.pathname;
        if(/home|speak|we|user/.test(path)){
            return({bFoot:true})
        }else{
            return({bFoot:false})
        }
        return null
    }
    render(){
        let {bFoot,bLoading} = this.state
        return(
            <div className="App">
                {bLoading && <Loading/>}
                <Switch>
                    <Route path="/address" component={Address}/>
                    <Route path="/bdmap" component={BdMap}/>
                    <Route path="/content" component={Content}/>
                    {/* <Route path="/detail/:id" component={Detail}/> */}
                    <Route path="/detail" component={Detail}/>
                    <Route path="/list" component={List}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/sign" component={Sign}/>
                    <Route path="/speak" component={Speak}/>
                    <Auth path="/user" component={User}/>
                    <Route path="/we" component={We}/>
                    <Route path="/write" component={Write}/>
                    <Route path="/home" component={Home}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={ErrorPage}/>
                </Switch>
                {bFoot ? <Footer/> : null}
            </div>
        )
    }
}