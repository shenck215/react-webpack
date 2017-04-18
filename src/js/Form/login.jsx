import React,{
    Component,
} from 'react';
import {
    Form,
    Input,
    Icon,
    Button,
    message,
    Checkbox,
} from 'antd';
import {
    Link,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import '../../css/Form/login.css';

/* eslint-disable */
const FormItem = Form.Item;

let hasError = (getFieldsError) => {
    return Object.keys(getFieldsError).some(field => getFieldsError[field]);
}

class myAppLogin extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success('Received values of form !');
            }
            console.log(values);
        });
    }

    render() {

        const {
            getFieldDecorator,
            isFieldTouched,
            getFieldError,
            getFieldsError,
        } = this.props.form;

        const userNameError = isFieldTouched('username') && getFieldError('username');

        const passWordError = isFieldTouched('password') && getFieldError('password');

        return (
            <Form className="login-form" onSubmit={(e) => {this.onSubmit(e)}}>
                <p></p>
                <FormItem 
                    validateStatus = {userNameError? 'warning': ''} help = {userNameError || ''}
                >
                    {
                        getFieldDecorator('username',{
                            rules: [
                                {
                                    required: true,message: '请输入用户名'
                                }
                            ]
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} value="111" placeholder="请输入用户名" />
                        )
                    }
                    
                </FormItem>
                <FormItem
                    validateStatus = {passWordError? 'error' : ''}
                    help = {passWordError || ''}
                >
                    {
                        getFieldDecorator('password',{
                            rules: [
                                {
                                    required: true,message: '请输入密码'
                                }
                            ]
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="请输入密码"/>
                        )
                    }
                    
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )
                    }
                    <Link to="/CustomApp" className="login-form-forgot">Forgot password</Link>
                    <Button
                        type="primary" 
                        htmlType="submit" className="login-form-button"
                        disabled = {hasError(getFieldsError())}
                    >
                        Log in
                    </Button>
                    Or <Link to="/RegisterApp">register now!</Link>
                    
                    
                </FormItem>
            </Form> 
        ); 
    }
}

const myAppLoginForm = Form.create({})(myAppLogin);

export default myAppLoginForm;