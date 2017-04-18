import React,{ Component } from 'react';
import { 
    Switch,
    Menu,
    Icon,
 } from 'antd';
import '../../css/SubMenu/myApp.css';
import 'antd/dist/antd.less';

const SubMenu = Menu.SubMenu;

/* eslint-disable */
var obj = { key: 'value', };

class App extends Component {

    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this.state = {
            theme: 'dark',
            current: '1',
            mode: 'inline',
            openKeys: ['sub2'],
        };
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    changeMode = (value) => {
        this.setState({
            mode: value ? 'inline' : 'vertical',
        });
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });

    }

    onOpenChange = (openKeys) => {
        console.log(openKeys)
        const stateOpenkeys = this.state.openKeys;

        for(let i in openKeys) {

            for(let j in stateOpenkeys) {

                if(stateOpenkeys[j] === openKeys[i]) {

                    if(!(openKeys[i] === 'sub2' && openKeys.indexOf('sub3') > 0 && openKeys.length === 2)){
                        openKeys.splice(i,1);
                    }
                    
                }
            }
        }
        console.log(openKeys)

        this.setState({
            openKeys: openKeys,
        });
    }


    render(){
        return (
            <div>
                <br/>
                主题切换：
                <Switch
                checked={this.state.theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
                />
                <br/>
                <br/>
                展开方式切换：
                <Switch
                checked={this.state.mode === 'inline'}
                onChange={this.changeMode}
                checkedChildren="inline"
                unCheckedChildren="vertical"
                />
                <br/>
                <br/>
                <Menu
                theme={this.state.theme}
                onClick={this.handleClick}
                onOpenChange={this.onOpenChange}
                style={{ width: 240 }}
                defaultOpenKeys={this.state.openKeys}
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                mode={this.state.mode}
                >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default App;