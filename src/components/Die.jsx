
import React, {Component} from 'react';
import './die.css';

export default class Die extends Component {

    constructor(props) {
	super(props);

	this.handleKeeperChange = this.handleKeeperChange.bind(this);
	this.handleImageClick = this.handleImageClick.bind(this);
    }

    handleKeeperChange(event) {
	this.props.toggleDieKeeper(this.props.die, event.target.checked);
    }

    handleImageClick(event) {
	var checked = !this.props.die.keeper;
	this.props.toggleDieKeeper(this.props.die, checked);
    }
    
    render() {
	var die = this.props.die;

	var imageUrl = 'images/die' + die.value + '.jpg';

	return (
	    <div className="die">
		<form>
		    <div className="displayVertical">
			<img src={imageUrl} alt={die.value} className="dieImage" onClick={this.handleImageClick} />
		    </div>
		    <div className="displayVertical">
		        <input type="checkbox" onChange={this.handleKeeperChange} checked={this.props.die.keeper} />
		    </div>
		</form>
	    </div>
	);
    }
}
