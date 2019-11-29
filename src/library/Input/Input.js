import React from 'react';
import './Input.css';
import propTypes from 'prop-types';

//props label value
export default class Input extends React.Component{
    render(){
        let {type,label,value,defaultValue,onChange,name} = this.props;
        return(
            <div className="text">
              <span>{label}</span>
              <input name={name} type={type} value={value} onChange={onChange}/>
            </div>
        )
    }
}
Input.defaultProps={//约定默认值
    type:'text',
    label:'',
    value:'',
    defaultValue:'',
    name:'',
    onChange:()=>{}
};
Input.propTypes={//约定类型
    type:propTypes.string,
    label:propTypes.string,
    name:propTypes.string,
    value:propTypes.string,
    defaultValue:propTypes.string,
    onChange:propTypes.func
}