import React,{
    Component,
} from 'react';
import {
    AutoComplete,
} from 'antd';

/* eslint-disable */
const Option = AutoComplete.Option;

class myApp extends Component {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.state = {
            result: []
        };
    }

    change(value) {

        let result = this.state.result;

        const address = ['@126.com','@qq.com','@163.com','@sina.com'];

        if(!value || value.indexOf('@') >= 0) {
            result = [];
        }else {
            address.map((item) => {
                result.push(`${value}${item}`);
            });
        }

        this.setState({
            result,
        });
    }

    render() {

        const childern = this.state.result.map((email) => {
            return <Option key={email}>{email}</Option>;
        })

        return(
            <AutoComplete
             style = {{ width: 200,marginTop: 20}}
             placeholder = "input here"
             onChange = {(value) =>{this.change(value)}}
            >
                {childern}
            </AutoComplete>
        );
    }

}

export default myApp;