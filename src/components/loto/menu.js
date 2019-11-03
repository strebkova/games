import React from 'react';
import Profile from './img/avatar.png'
import IconCard from './img/icon-card.png'
import Mail from './img/envelope.png'
import Vk from './img/vk.png'
import Ok from './img/ok.png'
import Fb from './img/facebook.png'

class Menu extends React.Component{
	  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  	}

  	showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
	render(){
		return(
		<div className="relative">
	<a className="mobile-open-menu" href="#" onClick={this.showMenu}>Меню</a>

{    this.state.showMenu
    	? (
    		<nav className="nav-left">
		<div className="account">
			<img src={Profile}/>
			<h4>Username, <br/> кабинет</h4>
		</div>
		<div className="balance offset-menu">
			<p>Счет: 0</p>
			<p>Бонусный Счет: 0</p>
		</div>
		<div className="menu-right-nav">
			<div className="vertical-text">
				Меню
			</div>
			<ul>
				<li><a href="#">Главная</a></li>
				<li><a href="#">Новости</a></li>
				<li><a href="#">Зал славы</a></li>
				<li><a href="#">Турниры</a></li>
			</ul>
		</div>
		<div className="other-nav-right offset-menu">
			<a href="#"><i className="icon-chat"></i>Чат</a> <br/>
			<a href="#" className="about-club"><img src={IconCard}/>О клубе <i className="icon-down-dir"></i></a>
			<div className="dropdown">
				<a href="#">Правила клуба</a> <br/>
				<a href="#">О сайте</a>
			</div>
		</div>
		<div className="soc-media offset-menu">
			<a href="#"><img src={Mail}/></a>
			<a href="#"><img src={Vk}/></a>
			<a href="#"><img src={Ok}/></a>
			<a href="#"><img src={Fb}/></a>
		</div>
	</nav>
    		)
			: (
   				null
			  )
	}
		</div>
		);
	}
}
export default Menu;