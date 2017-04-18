import React,{
    Component,
} from 'react';
import {
    Progress,
    Button,
} from 'antd';
import 'antd/dist/antd.less';
import '../../css/Progress/progress.css';

const ButtonGroup = Button.Group;

class ProgressApp extends Component {

    constructor(props) {
        super(props);

        
    }

    componentWillMount() {
        this.state = {
            circlePercent: 0,
            linePercent: 0,
        };
    }

    CircleCheck = (value) => {
        if(value >= 0 && value <= 100){
            this.setState({
                circlePercent: value,
            });
        }
    }

    LineCheck = (value) => {
        if(value >= 0 && value <= 100){
            this.setState({
                linePercent: value,
            });
        }
    }

    handleCircleAdd = () => {
        let circlePercent = this.state.circlePercent + 10;

        this.CircleCheck(circlePercent);
    }

    handleCircleSub = () => {
        let circlePercent = this.state.circlePercent -10;

        this.CircleCheck(circlePercent);
    }

    handleLineAdd = () => {
        let linePercent = this.state.linePercent + 10;

        this.LineCheck(linePercent);
    }

    handleLineSub = () => {
        let linePercent = this.state.linePercent -10;

        this.LineCheck(linePercent);
    }

    render() {
        return (
            <div>
                <Progress className="click_progress" type="circle" percent={this.state.circlePercent} format={percent => `${percent}个光波`}/>
                <ButtonGroup style={{marginLeft: 10}}>
                    <Button onClick={this.handleCircleAdd}>+</Button>
                    <Button onClick={this.handleCircleSub}>-</Button>
                </ButtonGroup>
                <Progress className="line_progress" type="line" percent={this.state.linePercent}/>
                <ButtonGroup style={{marginTop: 10}}>
                    <Button onClick={this.handleLineAdd}>+</Button>
                    <Button onClick={this.handleLineSub}>-</Button>
                </ButtonGroup>
            </div>       
        );
    }
}

export default ProgressApp;