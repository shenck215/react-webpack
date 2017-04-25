import React from 'react';
import { 
    Tabs,
} from 'antd';


/* eslint-disable */
const TabPane = Tabs.TabPane;

class myApp3 extends React.Component {

    constructor(props) {
        super(props);

        
    }

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: '这是第一个tab的内容',
                key: '0',
                closable: false,
            },
            {
                title: 'Tab 2',
                content: '这是第二个tab的内容',
                key: '1',
            }
        ];

        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    change(key) {
        this.setState({
            activeKey: key
        });
    }

    edit(targetKey, action) {
        this[action](targetKey);
    }

    add() {
        const panes = this.state.panes;

        const activeKey = panes.length.toString();

        panes.push({
            title: `New Tab`,
            content: `这是第${panes.length + 1}个tab的内容`,
            key: panes.length,
        });

        this.setState({
            activeKey,
            panes,
        });
    }

    remove(targetKey) {
        const panes = this.state.panes;

        let activeKey = this.state.activeKey;

        if(activeKey === targetKey){
            activeKey = activeKey - 1;
        }

        panes.splice(targetKey,1);

        this.setState({
            activeKey,
            panes,
        });
    }

    render() {
        return (
            <Tabs
                activeKey = {this.state.activeKey}
                type = "editable-card"
                onChange = {(key) => {this.change(key)}}
                onEdit = {(targetKey, action) => {this.edit(targetKey, action)}}
            >
                {
                    this.state.panes.map((pane) => {
                        return (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                {pane.content}
                            </TabPane>
                        );
                        
                    })
                }
            </Tabs>
        );
    }
}

export default myApp3;