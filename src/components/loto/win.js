import React from 'react';
import AvaFirst from './img/ava2.png'
import AvaSecond from './img/ava3.png'
import Fishki from './img/src/fishki-sverhu/22.png'

class Win extends React.Component{
	render(){
		return(
		<div class="blackblock">	
			<div class="win-block">	
				<div class="header-winblock">
					<p>
						Игра окончена!
					</p>
				</div>
				<div class="winners">
					<p class="win">Победили</p>

					<div class="row">
						<div class="winner col-6">
							<img src={AvaFirst}/>
							<p>id17996823822.11.197</p>
						</div>
						<div class="winner col-6">
							<img src={AvaSecond}/>
							<p>id17996823822.11.197</p>
						</div>
					</div>
				</div>

				<div class="bochonki">
					<p>Выпавшие бочонки:</p>

					<div class="row-bochki">
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
						<img src={Fishki}/>
					</div>
				</div>
			</div>
		</div>

		);
	}
}

export default Win;