import React,{
    Component,
} from 'react';
import {
    Button,
    notification,
} from 'antd';
import '../../css/Notification/notification.css';

/*eslint-disable */
class NotificationApp extends Component {
    constructor(props) {
        super(props);
    }

    openNotificationWithIcon = (value) => {
        notification[value]({
            message: 'title',
            description: 'content',
        });
    }

    render() {
        return(
            <div>
                <Button type="primary" onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                <Button type="dashed" onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                <Button type="default" onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                <Button type="danger" onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
            </div>
            
        );
    }
} 

export default NotificationApp;