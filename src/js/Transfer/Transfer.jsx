import React,{
    Component,
} from 'react';
import {
    Transfer,
} from 'antd';
import 'antd/dist/antd.less';

/* eslint-disable */
const dataSource = [];
let targetKeys = [];

class TransferApp extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        for(let i = 0;i < 20;i++) {

            const data = {
                key: i,
                title: `content${i + 1}`,
            };
            
            dataSource.push(data);
        }

        targetKeys = dataSource.filter(item => item.key % 2 === 0).map(item => item.key);

        this.state = {
            targetKeys,
        };
    }

    handleChange(nextTargetKeys) {
        this.setState({
            targetKeys: nextTargetKeys
        })
    }

    render() {
        return (
            <Transfer
                dataSource = {dataSource}
                targetKeys = {this.state.targetKeys}
                showSearch
                titles = {['Source','Target']}
                onChange = {
                    (nextTargetKeys) => {
                        this.handleChange(nextTargetKeys)
                    }
                }
                render = {render => render.title}
            />
        );
    }
}

export default TransferApp;