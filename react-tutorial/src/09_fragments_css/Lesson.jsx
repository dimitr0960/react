import React, { Fragment } from 'react';
import './style.css';

// Array
const ColumnsArray = () => (
	[
		<td key={1}>Hello</td>,
		<td key={2}>world</td>,
	]
);

// Inline style
const style = {color: 'red', textTransform: 'uppercase'};

// Fragment
const ColumnsFragment = () => (
	<Fragment>
		<td style={style}>Inline</td>
		<td className="title">Simple class</td>
	</Fragment>
);

const Table = () => (
	<table>
		<tbody>
			<tr>
				<ColumnsFragment/>
			</tr>
		</tbody>
	</table>
);

export default Table;