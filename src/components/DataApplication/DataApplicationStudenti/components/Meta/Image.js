import React, {Component} from 'react';

let Image = function statelessFunctionComponentClass(props) {
	let source = './img/data-appl/' + props.source;

	let style = {
		width: '120px',
		margin: '10px 5px 0px 5px',
		display: 'inline-block'
	};

	return (
		<img src={source} style={style} alt={props.source}/>
	);
};

class Images extends Component {
	createImage(image) {
		return <Image source={image} key={image}/>;
	}

	createImages(images) {
		return images.map(this.createImage);
	}

	render() {
		let translate = "translate(0, 100)";
		return (
			<g transform={translate}>
				{this.createImages(this.props.files)}
			</g>
		);


	}
}

export default Images;

