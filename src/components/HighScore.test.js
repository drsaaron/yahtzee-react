import React from 'react';
import renderer from 'react-test-renderer';

import HighScore from './HighScore';

describe('highScore', () => {
    test('basic', () => {
	var highScore = { highScore: 250, date: 1644810598778 }; // this date is 2/14/2022 in GMT but 2/13/2022 in local time
	const getHighScore = () => { };
	const component = renderer.create(<HighScore highScore={highScore} getHighScore={getHighScore} />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
    });
});
