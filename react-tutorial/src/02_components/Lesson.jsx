import React, {Component} from 'react';

function Welcome() {
	return <h1>Hello world!</h1>
}

class SuperWelcom extends Component {
	render() {
		return <h1>Hello world!</h1>
	}
}

function Lesson() {
	return (
		<div>
			<Welcome />
			<SuperWelcom />
		</div>
	)
}

export default Lesson;