import React from 'react';
import TopBg from './img/top_bg.png';
import Frame from './img/frame.png';
import Ava from './img/ava1.png';

let FrameImg = {
  backgroundImage: `url(${Frame})`
};
let BgTop = {
  backgroundImage: `url(${TopBg})`	
}
let Avatar = {
  backgroundImage: `url(${Ava})`		
}
class Header extends React.Component{
	render(){
		return(
				<header className="header" style={BgTop}>	
						<div className="container-frame">
							<div className="frame" style={FrameImg}>
							<img src={ Ava } className="header-avatar"/>
						<p className="header-username">User 1</p>
						</div>
						<div className="frame" style={FrameImg}>
							<img src={ Ava } className="header-avatar"/>
							<p className="header-username">User 2</p>
						</div>
						<div className="frame" style={FrameImg}>
							<img src={ Ava } className="header-avatar"/>
							<p className="header-username">User 3</p>
						</div>
						<div className="frame" style={FrameImg}>
							<img src={ Ava } className="header-avatar"/>
							<p className="header-username">User 4</p>
						</div>
					</div>
				</header>
		);
	}
}

export default Header;