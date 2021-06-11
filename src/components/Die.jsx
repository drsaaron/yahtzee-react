
import React, {Component} from 'react';

export default class Die extends Component {

    constructor(props) {
	super(props);

	this.state = { keeper: this.props.value.keeper };

	this.handleKeeperChange = this.handleKeeperChange.bind(this);
    }

    handleKeeperChange(event) {
	this.setState({...this.state, keeper: event.target.checked });
    }
    
    render() {
	var value = this.props.value;

	var imageUrl = 'images/die' + value.value + '.jpg';

	return (
	    <div className="die">
		<form>
		    <img src={imageUrl} alt={value.value} />
		    <input type="checkbox" onChange={this.handleKeeperChange} />
		</form>
	    </div>
	);
    }
}
