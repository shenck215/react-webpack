import React,{
    Component,
} from 'react';
import {
    Badge,
} from 'antd';
import badgeStyle from '../../css/badge/badge';

/* eslint-disable */
class BadgeApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={badgeStyle.divMargin}>
                <Badge count={120} overflowCount={99}>
                    
                </Badge>
                <br/>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warning" />
                <br />
                <Badge status="success" text="Success" />
                <br />
                <Badge status="error" text="Error" />
                <br />
                <Badge status="default" text="Default" />
                <br />
                <Badge status="processing" text="Processing" />
                <br />
                <Badge status="warning" text="Warning" />
            </div>
            
        );
    }
}

export default BadgeApp;