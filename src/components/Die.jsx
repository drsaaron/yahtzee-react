
import React, {Component} from 'react';
import './die.css';

export default class Die extends Component {

    constructor(props) {
	super(props);

	this.state = { keeper: this.props.die.keeper };

	this.handleKeeperChange = this.handleKeeperChange.bind(this);
    }

    handleKeeperChange(event) {
	this.setState({...this.state, keeper: event.target.checked });
	this.props.toggleDieKeeper(this.props.die, event.target.checked);
    }
    
    render() {
	var die = this.props.die;

	var imageUrl = 'images/die' + die.value + '.jpg';

	return (
	    <div className="die">
		<form>
		    <div className="displayVertical">
			<img src={imageUrl} alt={die.value} className="dieImage" />
		    </div>
		    <div className="displayVertical">
		        <input type="checkbox" onChange={this.handleKeeperChange} />
		    </div>
		</form>
	    </div>
	);
    }
}
