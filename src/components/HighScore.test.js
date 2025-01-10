import React from 'react';
import {render} from '@testing-library/react';

import HighScore from './HighScore';

describe('highScore', () => {
    test('basic', () => {
	var highScore = { highScore: 250, date: 1644810598778 }; // this date is 2/14/2022 in GMT but 2/13/2022 in local time
	const {asFragment, getByText} = render(<HighScore highScore={highScore} />);
	expect(asFragment()).toMatchSnapshot();
    });
});
