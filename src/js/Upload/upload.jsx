import React,{
    Component,
} from 'react';
import {
    Upload,
    Icon,
    Modal,
} from 'antd';
import uploadStyle from '../../css/Upload/upload';

class uploadApp extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.state = {
            isVisible: false,
            imgSrc: '',
            fileList: [],
        }
    }

    handleChange(fileList) {
        this.setState({
            fileList,
        });
    }

    handlePreview(file) {
        this.setState({
            imgSrc: file.url || file.thumbUrl,
            isVisible: true,
        });
    }

    render() {

        const uploadButton = (
            <div>
                <Icon type="plus"/>
            </div>
        );

        return(
            <div>
                <Upload
                    action = "//jsonplaceholder.typicode.com/posts/"
                    listType = "picture-card"
                    onChange = {(fileList) => {this.handleChange(fileList)}}
                    onPreview = {(file) => {this.handlePreview(file)}}
                >
                    {
                        this.state.fileList.length >= 3 ? null : uploadButton
                    }
                </Upload>
                <Modal 
                    visible = {this.state.isVisible}
                    footer = {null}
                >
                    <img src={this.state.imgSrc}/>
                </Modal>
            </div>
        );
    }
}

export default uploadApp;