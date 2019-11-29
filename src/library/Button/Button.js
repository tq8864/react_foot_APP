import React from 'react';
import './Button.css';
import propTypes from 'prop-types';


function Button(props){
    return(
        <div className="btndl">
            <input
            type="button" 
            value={props.value} 
            className="login-btn" 
            onClick={props.clickHanlder}
            />
        </div>
    )
}
Button.defaultProps={
    value:'按钮',
    clickHanlder:()=>{}
};
Button.propTypes={//类型检查
    value:propTypes.string,
    clickHanlder:propTypes.func
};
export default Button;
// export default class Button extends React.Component{
    // static defaultProps = {
    //     value:'按钮',
    //     clickHanlder:()=>{}
    // };
//     static propTypes={//类型检查
//         value:propTypes.string,
//         clickHanlder:propTypes.func
//     };
//     render(){
//         return(
//             <div className="btndl">
//                 <input
//                  type="button" 
//                  value={this.props.value} 
//                  className="login-btn" 
//                  onClick={this.props.clickHanlder}
//                 />
//             </div>
//         )
//     }
// }