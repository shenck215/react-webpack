import React,{
    Component,
} from 'react';
import {
    DatePicker,
} from 'antd';
import 'antd/dist/antd.less';


/*eslint-disable */

const {
    MonthPicker,
    RangePicker,
} = DatePicker;

class myApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <DatePicker placeholder="select day" />
                <br/><br/>
                <MonthPicker placeholder="select month" />
                <br/><br/>
                <RangePicker placeholder={['start time', 'end time']} />
            </div>
        );
    }
}

export default myApp;