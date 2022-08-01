
import store from '../store/YahtzeeStore';
import { Provider } from 'react-redux';
import GameCard from './GameCard';

const Main = (props) => {

    return (
	<Provider store={store}>
	    <GameCard />
	</Provider>
    );
}

export default Main;
