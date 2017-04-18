import React,{
    Component,
} from 'react';
import {
    Form,
    Input,
    Col,
    DatePicker,
} from 'antd';
import 'antd/dist/antd.less';
import '../../css/Form/custom.css';

/* eslint-disable */
const FormItem = Form.Item;

class customApp extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <Form style={{marginTop: 20}} className="form">
                <FormItem
                    label="Fail"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error" />
                </FormItem>

                <FormItem
                    label="Warning"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    validateStatus="warning"
                >
                    <Input placeholder="Warning" id="warning" />
                </FormItem>

                <FormItem
                    label="Validating"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    hasFeedback
                    validateStatus="validating"
                    help="The information is being validated..."
                >
                    <Input placeholder="I'm the content is being validated" id="validating" />
                </FormItem>

                <FormItem
                    label="Success"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    hasFeedback
                    validateStatus="success"
                >
                    <Input placeholder="I'm the content" id="success" />
                </FormItem>

                <FormItem
                    label="Warning"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    hasFeedback
                    validateStatus="warning"
                >
                    <Input placeholder="Warning" id="warning" />
                </FormItem>

                <FormItem
                    label="Fail"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    hasFeedback
                    validateStatus="error"
                    help="Should be combination of numbers & alphabets"
                >
                    <Input placeholder="unavailable choice" id="error" />
                </FormItem>

                <FormItem
                    label="inline"
                    labelCol={{ span: 5 }}
                    help
                >
                <Col span="6">
                    <FormItem validateStatus="error" help="Please select the correct date">
                    <DatePicker />
                    </FormItem>
                </Col>
                <Col span="1">
                    <p className="ant-form-split">-</p>
                </Col>
                <Col span="6">
                    <FormItem>
                    <DatePicker />
                    </FormItem>
                </Col>
                </FormItem>
            </Form>
        );
    }
}

export default customApp;