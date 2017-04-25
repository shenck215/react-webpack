import React,{
    Component,
} from 'react';
import { 
    Spin, 
    Switch, 
    Alert 
} from 'antd';

class SpinApp extends Component {

    constructor(props) {
        super(props);

        
    }

    componentWillMount() {
        this.state = {
            loading: false,
        };
    }

    toggle = (value) => {
        this.setState({
            loading: value,
        });
    }

    render() {

        return (
            <div>
                <Spin 
                    spinning={this.state.loading}
                >
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="success"
                    />
                </Spin>
                Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
            </div>
        );
    }
}

export default SpinApp;
