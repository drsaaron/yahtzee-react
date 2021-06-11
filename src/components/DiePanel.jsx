
import React, {Component} from 'react';
import Die from './Die';

export default class DiePanel extends Component {

    constructor(props) {
	super(props);
    }
    
    render() {
	
	var die = this.props.die.die;
	
	return (
	    <div id="diePanel">
		a die panel
		{die.map(v => <Die value={v} key={v.key} />)}
	    </div>
	);
    }
}
