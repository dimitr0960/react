import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyLink = ({text, onClick}) => (
	<a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
}

MyLink.defaultProps = {
	text: 'link',
	onClick: () => {},
}

export class App extends Component {

	handleClick = (e) => {
		e.preventDefault();
		console.log('Click on Link');
		// this.test();
	}

	render() {
		return (
			<MyLink onClick={this.handleClick} />
		);
	}
}