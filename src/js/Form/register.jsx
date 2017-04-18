import React,{
    Component,
} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Checkbox,
    Button,
} from 'antd';
import 'antd/dist/antd.less';
import '../../css/Form/register.css';

/* eslint-disable */
const FormItem = Form.Item;

const options = [{
  value: 'Zhejiang',
  label: '浙江',
  children: [{
    value: 'Hanzhou',
    label: '杭州',
    children: [{
      value: 'West Lake',
      label: '西湖',
    }],
  }],
}, {
  value: 'Jiangsu',
  label: '江苏',
  children: [{
    value: 'Nanjing',
    label: '南京',
    children: [{
      value: 'Zhong Hua Men',
      label: '中华门',
    }],
  }],
}];

const Option = Select.Option;

class myAppRegister extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this.state = {
            confirmDirty: false,
        };
    }

    checkConfirm (rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    checkPassword (rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致');
        } else {
            callback();
        }
    }

    render() {

        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 12 },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                offset: 8,
            },
        };

        const {
            getFieldDecorator,
        } = this.props.form;

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
                <Option value="88">+88</Option>
            </Select>
        );

        return (
            <Form style={{marginTop: 20}} className = "register-form">
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    hasFeedback
                >
                    {
                        getFieldDecorator('email',{
                            rules: [
                                {
                                    required: true,
                                    message: '邮箱不能为空'
                                },
                                {
                                    type: 'email',
                                    message: '邮箱格式不正确'
                                }
                            ]
                        })(<Input />)
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label = "Password"
                    hasFeedback
                >
                    {
                        getFieldDecorator('password',{
                            rules: [
                                {
                                    required: true,
                                    message: '密码不能为空'
                                },
                                {
                                    validator: this.checkConfirm,
                                }
                            ]
                        })(
                            <Input type="password" />
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label = "Comfirm Password"
                    hasFeedback
                >
                    {
                        getFieldDecorator('confirm',{
                            rules: [
                                {
                                    required: true,
                                    message: '确认密码不能为空'
                                },
                                {
                                    validator: this.checkPassword,
                                }
                            ]
                        })(
                            <Input type="password" />
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want other to call you?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    hasFeedback
                    >
                    {
                        getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '昵称不能为空' }],
                        })(
                            <Input />
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label = "Habitual Residence"
                >
                    {
                        getFieldDecorator('residence',{
                            initialValue: ['Zhejiang','Hanzhou','West Lake'],
                            rules: [
                                {
                                    type: 'array',
                                    required: true,
                                    message: '地址不能为空'
                                }
                            ]
                        })(
                            <Cascader changeOnSelect options={options} />
                        )
                    }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Phone Number"
                >
                    {
                        getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true, message: '手机号码不能为空'
                                },{
                                    validator: (rule, value, callback) => {

                                            if(!(/^(1[34578]\d{9})?$/.test(value))){
                                                callback('手机号码格式错误');
                                            }
                                            callback();
                                        }
                                }
                                
                            ],
                        })(
                            <Input addonBefore={prefixSelector} />
                        )
                    }
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                 >
                    {
                        getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a>agreement</a>
                            </Checkbox>
                        )
                    }
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button
                         type="primary" 
                         htmlType="submit"
                        size="large"
                    >
                        Register
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const myAppRegisterForm = Form.create({})(myAppRegister);

export default myAppRegisterForm;