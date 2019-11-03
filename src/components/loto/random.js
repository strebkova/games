import React from 'react';
import BrownBg from './img/brown_block.png';
import Logo from './img/logo-rus-loto.png';
import BochkaFrame from './img/frame-bochki.png';
import ActiveBochka from './img/src/fishki/63.png';
import Polka from './img/polki.png';
import Fishka from './img/src/fishki/10.png';
import Bank from './img/bank.png'

let BgBrown = {
  backgroundImage: `url(${BrownBg})`	
}


class Random extends React.Component{
	render(){
		return(
			<section className="game-header" style={BgBrown}>
			<div className="container-game-header">
				<div className="row">
					<div className="col-4">
						<div className="logo-loto">
							<img src={Logo}/>
						</div>
					</div>
					<div className="col-8">
						<img src={BochkaFrame} className="frame-bochki"/>
						<img src={ActiveBochka} className="active-bochka"/>
						<img src={Polka} className="polka"/>
						<div className="last-bockhi">
							<div className="last-bochka">
								<img src={Fishka}/>
							</div>
							<div className="last-bochka">
								<img src={Fishka}/>
							</div>
							<div className="last-bochka">
								<img src={Fishka}/>
							</div>
							<div className="last-bochka">
								<img src={Fishka}/>
							</div>
						</div>

						<div className="bank">
							<img src={Bank}/>
							<p>500 ₽</p>
						</div>

						<div class="checkboxes">
							<div>
							  <input type="checkbox" checked/>
 							  <label for="scales">Звук: вкл</label> 
 							</div>
 							<div>
							  <input type="checkbox"checked/>
 							  <label for="scales">Автозаполнение</label>
 							</div>
						</div>		
					</div>
				</div>
			</div>
		</section>
		);
	}
}

export default Random;