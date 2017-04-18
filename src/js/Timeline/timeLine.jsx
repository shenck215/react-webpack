import React,{
    Component,
} from 'react';
import {    
    Timeline,
} from 'antd';
import 'antd/dist/antd.less';

const TimelineItem = Timeline.Item;

class TimelineApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Timeline pending={<span>4</span>}>
                <TimelineItem>1</TimelineItem>
                <TimelineItem>2</TimelineItem>
                <TimelineItem>3</TimelineItem>
            </Timeline>
        );
    }
}

export default TimelineApp;