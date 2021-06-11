
import React, {Component} from 'react';
import Die from './Die';

export default class DiePanel extends Component {

    constructor(props) {
	super(props);

	var values = [
	    {
		key: 1,
		value: 1,
		keeper: false
	    },
	    {
		key: 2,
		value: 2,
		keeper: false
	    },
	    {
		key: 3,
		value: 3,
		keeper: false
	    },
	    {
		key: 4,
		value: 4,
		keeper: false
	    },
	    {
		key: 5,
		value: 5,
		keeper: false
	    }
	];
	
	this.state = { die: values };
    }
    
    render() {
	
	var die = this.state.die;
	
	return (
	    <div id="diePanel">
		a die panel
		{die.map(v => <Die value={v} key={v.key} />)}
	    </div>
	);
    }
}
