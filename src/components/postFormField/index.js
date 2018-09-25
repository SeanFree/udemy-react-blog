import { Component } from 'react';
import Template from './template';

class PostFormField extends Component {
    render() {
        return Template.call(this, this.props);
    }
}

export default PostFormField;