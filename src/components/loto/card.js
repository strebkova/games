import React from 'react';
import GameBg from './img/bg.png';
import Bilet from './img/src/blilet/bilet_2.png';

let Bg = {
	backgroundImage: `url(${GameBg})`
}

class Cards extends React.Component{
	render(){
		return(
		<section className="game" style={Bg}>
			<img src={Bilet}/>
			<img src={Bilet}/>
			<img src={Bilet}/>
		</section>
		);
	}
}

export default Cards;