
import './die.css';

function handleKeeperChange(event, props) {
    props.toggleDieKeeper(props.die, event.target.checked);
}

function handleImageClick(props) {
    var checked = !props.die.keeper;
    props.toggleDieKeeper(props.die, checked);
}

const Die = (props) => {

    var die = props.die;

    var imageUrl = 'images/die' + die.value + '.jpg';
    
    return (
	<div className="die">
	    <form>
		<div className="displayVertical">
		    <img src={imageUrl} alt={die.value} className="dieImage" onClick={() => handleImageClick(props)} />
		</div>
		<div className="displayVertical">
		    <input type="checkbox" onChange={(event) => handleKeeperChange(event, props)} checked={props.die.keeper} />
		</div>
	    </form>
	</div>
    );
}

export default Die;

