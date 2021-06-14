import { acesScorer, twosScorer, threesScorer, foursScorer, fivesScorer, sixesScorer, chanceScorer, threeOfAKindScorer, fourOfAKindScorer, yahtzeeScorer, smallStraightScorer, largeStraightScorer, fullHouseScorer } from './Scorers';

test('aces scorer', () => {
    var dice = [ { keeper: true, value: 1 }, { keeper: true, value: 1 }, { keeper: true, value: 2 } ];
    expect(acesScorer(dice)).toBe(2);
});

// yahtzee
test('yahtzee scorer, valid', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 } ];
    expect(yahtzeeScorer(dice)).toBe(50);
});

test('yahtzee scorer, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: false, value: 4 } ];
    expect(yahtzeeScorer(dice)).toBe(0);
});

// straights
test('small straight, good', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: false, value: 1 }, { keeper: true, value: 3 }, { keeper: true, value: 2 } ];
    expect(smallStraightScorer(dice)).toBe(30);
});
     
test('small straight, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: true, value: 1 }, { keeper: false, value: 3 }, { keeper: true, value: 2 } ];
    expect(smallStraightScorer(dice)).toBe(0);
});

test('large straight, good', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: true, value: 1 }, { keeper: true, value: 3 }, { keeper: true, value: 2 } ];
    expect(largeStraightScorer(dice)).toBe(40);
});
     
test('large straight, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: true, value: 1 }, { keeper: true, value: 3 }, { keeper: true, value: 4 } ];
    expect(largeStraightScorer(dice)).toBe(0);
});

// full house
test('full house, valid', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 2 }, { keeper: true, value: 2 }, { keeper: true, value: 4 }, { keeper: true, value: 4 } ];
    expect(fullHouseScorer(dice)).toBe(25);
});

test('full house, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 2 }, { keeper: true, value: 2 }, { keeper: true, value: 4 }, { keeper: true, value: 5 } ];
    expect(fullHouseScorer(dice)).toBe(0);
});
