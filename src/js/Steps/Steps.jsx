import React,{ Component } from 'react';
import { 
    Steps,
    Button,
    message,
} from 'antd';
import stepsStyle from '../../css/Steps/Steps';

/* eslint-disable */
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class StepsApp extends Component {

    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this.state = {
            current: 0,
        };
    }

    next () {

        const current = this.state.current + 1

        this.setState({
            current,
        })
    }

    prev () {

        const current = this.state.current - 1

        this.setState({
            current,
        })
    }

    commit () {
        message.success('提交成功!');
    }

    render() {

        const current = this.state.current;

        return (
            <div style={{marginTop: 20}}>
                <Steps current={current}>
                {
                    steps.map(item => <Step key={item.title} title={item.title} />)
                }
                </Steps>
                <div className={stepsStyle.stepsContent}>
                    {steps[this.state.current].content}
                </div>
                <div className={stepsStyle.stepsAction}>
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button className={stepsStyle.marginLeft} type="primary" onClick={() => this.prev()}>Previous</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button className={stepsStyle.marginLeft} type="primary" onClick={() => this.commit()}>Commit</Button>
                    }
                </div>
                
            </div>
            
        );
    }
}

export default StepsApp;