
import React, {Component} from 'react';
import store from '../store/YahtzeeStore';
import { Provider } from 'react-redux';
import GameCard from './GameCard';

export default class Main extends Component {

    render() {
	return (
	    <Provider store={store}>
		<GameCard />
	    </Provider>
	);
    }
}
