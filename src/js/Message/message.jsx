import React,{
    Component,
} from 'react';
import {
    message,
    Button,
} from 'antd';
import '../../css/Message/message.css';


/*eslint-disable */
class MessageApp extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (value) => {
        message[value](value,2);
    }

    render() {
        return(
            <div>
                <Button type="primary" onClick={() => this.handleClick('success')}>success</Button>
                <Button type="primary" onClick={() => this.handleClick('error')}>error</Button>
                <Button type="primary" onClick={() => this.handleClick('info')}>info</Button>
                <Button type="primary" onClick={() => this.handleClick('warning')}>warning</Button>
                <Button type="primary" onClick={() => this.handleClick('warn')}>warn</Button>
                <Button type="primary" onClick={() => this.handleClick('loading')}>loading</Button>
            </div>
            
        );
    }
}

export default MessageApp;