import { Component } from 'react';
import Template from './app.template';

export default class App extends Component {
	render() {
		return Template.call(this);
	}
}
