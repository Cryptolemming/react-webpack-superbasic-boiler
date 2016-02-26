import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

'use strict';

var styles = {
	example: {
		color: 'blue',
	}
};

var App = Radium(React.createClass({
	render() {
		return(
			<div>
				<h1 style={styles.example}>
					I am functioning properly
				</h1>
			</div>
		)
	}
}));

ReactDOM.render(<App />, document.getElementById('container'));