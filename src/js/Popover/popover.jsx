import React,{
    Component,
} from 'react';
import {
    Popover, 
    Button,
} from 'antd';


/* eslint-disable */

const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const buttonWidth = 50;

class PopoverApp extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.state = {
            visible: false,
        }
    }

    hide = () => {
        this.setState({
            visible: false,
        });
    }

    handleVisibleChange = (visible) => {
        this.setState({ 
            visible ,
        });
    }

    render() {
        return (
            <div>
                <Popover
                    content={<a onClick={this.hide}>Close</a>}
                    title="Title"
                    trigger="click"
                    visible = {this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Button type="primary">Click me</Button>
                </Popover>
                <br/><br/>
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title={text} content={content} trigger="click">
                        <Button style={{ marginRight: 10}}>TL</Button>
                    </Popover>
                    <Popover placement="top" title={text} content={content} trigger="click">
                        <Button style={{ marginRight: 10}}>Top</Button>
                    </Popover>
                    <Popover placement="topRight" title={text} content={content} trigger="click">
                        <Button>TR</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, float: 'left' }}>
                    <Popover placement="leftTop" title={text} content={content} trigger="click">
                        <Button style={{ marginTop: 10}}>LT</Button>
                    </Popover>
                    <Popover placement="left" title={text} content={content} trigger="click">
                        <Button style={{ marginTop: 10}}>Left</Button>
                    </Popover>
                    <Popover placement="leftBottom" title={text} content={content} trigger="click">
                        <Button style={{ marginTop: 10}}>LB</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
                    <Popover placement="rightTop" title={text} content={content} trigger="click">
                        <Button style={{ marginTop: 10}}>RT</Button>
                    </Popover>
                    <Popover placement="right" title={text} content={content} trigger="click">
                        <Button style={{ marginTop: 10}}>Right</Button>
                    </Popover>
                    <Popover placement="rightBottom" title={text} content={content} trigger="click">
                        <Button style={{ marginTop: 10}}>RB</Button>
                    </Popover>
                </div>
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                        <Button style={{ marginRight: 10}}>BL</Button>
                    </Popover>
                    <Popover placement="bottom" title={text} content={content} trigger="click">
                        <Button style={{ marginRight: 10}}>Bottom</Button>
                    </Popover>
                    <Popover placement="bottomRight" title={text} content={content} trigger="click">
                        <Button>BR</Button>
                </Popover> 
            </div>
        </div>
        );
    }
}

export default PopoverApp;