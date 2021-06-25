import { calculateScore } from './Scorers';
import ScoreTypes from './ScoreTypes';

test('aces scorer', () => {
    var dice = [ { keeper: true, value: 1 }, { keeper: false, value: 1 }, { keeper: true, value: 2 } ];
    expect(calculateScore(dice, ScoreTypes.ACES)).toBe(2);
});

// yahtzee
test('yahtzee scorer, valid', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 } ];
    expect(calculateScore(dice, ScoreTypes.YAHTZEE)).toBe(50);
});

test('yahtzee scorer, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: true, value: 4 }, { keeper: false, value: 4 } ];
    expect(calculateScore(dice, ScoreTypes.YAHTZEE)).toBe(0);
});

// straights
test('small straight, good', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: false, value: 1 }, { keeper: true, value: 3 }, { keeper: true, value: 2 } ];
    expect(calculateScore(dice, ScoreTypes.SMALL_STRAIGHT)).toBe(30);
});
     
test('small straight, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: true, value: 1 }, { keeper: false, value: 3 }, { keeper: true, value: 2 } ];
    expect(calculateScore(dice, ScoreTypes.SMALL_STRAIGHT)).toBe(0);
});

test('large straight, good', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: true, value: 1 }, { keeper: true, value: 3 }, { keeper: true, value: 2 } ];
    expect(calculateScore(dice, ScoreTypes.LARGE_STRAIGHT)).toBe(40);
});
     
test('large straight, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 5 }, { keeper: true, value: 1 }, { keeper: true, value: 3 }, { keeper: true, value: 4 } ];
    expect(calculateScore(dice, ScoreTypes.LARGE_STRAIGHT)).toBe(0);
});

// full house
test('full house, valid', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 2 }, { keeper: true, value: 2 }, { keeper: true, value: 4 }, { keeper: true, value: 4 } ];
    expect(calculateScore(dice, ScoreTypes.FULL_HOUSE)).toBe(25);
});

test('full house, bad', () => {
    var dice = [ { keeper: true, value: 4 }, { keeper: true, value: 2 }, { keeper: true, value: 2 }, { keeper: true, value: 4 }, { keeper: true, value: 5 } ];
    expect(calculateScore(dice, ScoreTypes.FULL_HOUSE)).toBe(0);
});

test('full house, no keepers', () => {
    var dice = [ { keeper: false, value: 4 }, { keeper: false, value: 2 }, { keeper: false, value: 2 }, { keeper: false, value: 4 }, { keeper: false, value: 4 } ];
    expect(calculateScore(dice, ScoreTypes.FULL_HOUSE)).toBe(25);
});
