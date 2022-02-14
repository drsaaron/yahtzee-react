import ScoreTypes from './ScoreTypes';

var summer = (accumulator, die) => accumulator + die.value;

function chanceScorer(dice) {
    return dice.reduce(summer, 0);
}

function getKeepers(dice) {
    return dice.filter(d => d.keeper);
}

function upperCardScorer(dice, value) {
    var keepers = dice.filter(d => d.value === value);
    var sum = keepers.reduce(summer, 0);
    return sum;
}

function acesScorer(dice) {
    return upperCardScorer(dice, 1);
}

function twosScorer(dice) {
    return upperCardScorer(dice, 2);
}

function threesScorer(dice) {
    return upperCardScorer(dice, 3);
}

function foursScorer(dice) {
    return upperCardScorer(dice, 4);
}

function fivesScorer(dice) {
    return upperCardScorer(dice, 5);
}

function sixesScorer(dice) {
    return upperCardScorer(dice, 6);
}

function nOfAKindScorer(dice, count) {
    var keepers = getKeepers(dice);

    // keepers size must be at least count long
    if (keepers.length >= count) {
	// all must be the same value
	var value = keepers[0].value;
	var noMatch = keepers.filter(d => d.value !== value);
	if (noMatch.length === 0) {
	    // all good, so return the sum of all which is the same as chance
	    return chanceScorer(dice);
	} else {
	    return 0;
	}
    } else {
	return 0;
    }
}

function threeOfAKindScorer(dice) {
    return nOfAKindScorer(dice, 3);
}

function fourOfAKindScorer(dice) {
    return nOfAKindScorer(dice, 4);
}

function yahtzeeScorer(dice) {
    // if this is 5 of a kind, then return 0
    if (nOfAKindScorer(dice, 5) > 0) {
	return 50;
    } else {
	return 0;
    }
}

// a function to sort the dice by value, ascending
var diceSorter = (d1, d2) => {
    if (d1.value < d2.value) {
	return -1;
    } else if (d1.value === d2.value) {
	return 0;
    } else {
	return 1;
    }
}

// a function to identify a straight of a desired length, returning true if yes.
function straightIdentifier(dice, l) {
    var keepers = getKeepers(dice);

    // should be at least l in length
    if (keepers.length >= l) {
	// sort the list.
	keepers.sort(diceSorter);

	// each value in teh list should be 1 greater than the previous vlaue
	for (var i = 1; i < keepers.length; i++) {
	    if (keepers[i].value !== keepers[i-1].value + 1) {
		return false;
	    }
	}

	// if we are here, all is golden
	return true;
    } else {
	return false;
    }
}

function smallStraightScorer(dice) {
    if (straightIdentifier(dice, 4)) {
	return 30;
    } else {
	return 0;
    }
}

function largeStraightScorer(dice) {
    if (straightIdentifier(dice, 5)) {
	return 40;
    } else {
	return 0;
    }
}

function fullHouseScorer(dice) {
    // grab all the dice, don't check for keepers
    var keepers = dice.slice();
    if (keepers.length < 5) {
	return 0;
    }

    // sort 'em
    keepers.sort(diceSorter);

    // There must be only 2 values present, low and high.
    var low  = keepers[0].value,
        high = keepers[3].value,
        mid  = keepers[2].value;

    /* There are only 2 cases:  the dice are
       low, low, high, high, high
       or
       low, low, low, high, high.
       Either way, keepers[0] == keepers[1] == low and
       keepers[3] == keepers[4] == high.
       We have defined low to equal keepers[0] and high to
       equal keepers[3]. */
    if (low  !== keepers[1].value ||
        high !== keepers[4].value ||
        (mid !== low && mid !== high)) { // not a full house
        return 0;
    } else { // alles ist in Ordnung
        return 25;
    }
};

function getScorer(type) {
    switch (type) {
    case ScoreTypes.ACES: return acesScorer;
    case ScoreTypes.TWOS: return twosScorer;
    case ScoreTypes.THREES: return threesScorer;
    case ScoreTypes.FOURS:return  foursScorer;
    case ScoreTypes.FIVES: return fivesScorer;
    case ScoreTypes.SIXES: return sixesScorer;
	
    case ScoreTypes.THREE_OF_A_KIND: return threeOfAKindScorer;
    case ScoreTypes.FOUR_OF_A_KIND: return fourOfAKindScorer;
    case ScoreTypes.FULL_HOUSE: return fullHouseScorer;
    case ScoreTypes.SMALL_STRAIGHT: return smallStraightScorer;
    case ScoreTypes.LARGE_STRAIGHT: return largeStraightScorer;
    case ScoreTypes.YAHTZEE: return yahtzeeScorer;
    case ScoreTypes.CHANCE: return chanceScorer;
    default: return null;
    }
}
	
export function calculateScore(dice, scoreType) {

    var scorer = getScorer(scoreType);
    return scorer(dice);
}
