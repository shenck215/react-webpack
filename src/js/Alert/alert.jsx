import React from 'react';
import {
    Alert,
} from 'antd';
import 'antd/dist/antd.less';

/* eslint-disable */

class AlertApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <Alert message="Success Tips" type="success" showIcon closable/>
                <Alert message="Informational Notes" type="info" showIcon closable/>
                <Alert message="Warning" type="warning" showIcon closable/>
                <Alert message="Error" type="error" showIcon closable/>
                <Alert
                    message="success tips"
                    description="Detailed description and advices about successful copywriting."
                    type="success"
                    showIcon
                    closable
                />
                <Alert
                    message="Informational Notes"
                    description="Additional description and informations about copywriting."
                    type="info"
                    showIcon
                    closable
                />
                <Alert
                    message="Warning"
                    description="This is a warning notice about copywriting."
                    type="warning"
                    showIcon
                    closable
                />
                <Alert
                    message="Error"
                    description="This is an error message about copywriting."
                    type="error"
                    showIcon
                    closable
                />
                <Alert
                    message="Warning"
                    banner
                    closable
                />
            </div>
            
        );
    }
}

export default AlertApp;