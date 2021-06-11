/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import ScoreCard from './ScoreCard';
import DiePanel from './DiePanel';

export default class GameCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='gameCard'>
                Yo dude.
		<DiePanel />
		<ScoreCard />
            </div>
        );
    }
}

