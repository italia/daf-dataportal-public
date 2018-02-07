import React, {Component} from 'react';

class Toggle extends Component {
	handleClick(event) {
		this.props.onClick(this.props.name, !this.props.value);
	}

	render() {
		let className = "Button Button--default Button--round";
		if (this.props.value) {
			className += " focus";
		}

		return (
			<button className={className} onClick={this.handleClick.bind(this)}>
				{this.props.label}
			</button>
		);
	}
}

export default Toggle;
