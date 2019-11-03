import React from 'react';

class Menu extends React.Component{
	render(){
		return(
	<a class="mobile-open-menu" href="#">Меню</a>
	<nav class="nav-left">
		<div class="account">
			<img src="img/avatar.png"/>
			<h4>Username, <br> кабинет</h4>
		</div>
		<div class="balance offset-menu">
			<p>Счет: 0</p>
			<p>Бонусный Счет: 0</p>
		</div>
		<div class="menu-right-nav">
			<div class="vertical-text">
				Меню
			</div>
			<ul>
				<li><a href="#">Главная</a></li>
				<li><a href="#">Новости</a></li>
				<li><a href="#">Зал славы</a></li>
				<li><a href="#">Турниры</a></li>
			</ul>
		</div>
		<div class="other-nav-right offset-menu">
			<a href="#"><i class="icon-chat"></i>Чат</a>
			<a href="#" class="about-club"><img src="img/icon-card.png">О клубе <i class="icon-down-dir"></i></a>
			<div class="dropdown">
				<a href="#">Правила клуба</a> <br>
				<a href="#">О сайте</a>
			</div>
		</div>
		<div class="soc-media offset-menu">
			<a href="#"><img src="img/envelope.png"/></a>
			<a href="#"><img src="img/vk.png"/></a>
			<a href="#"><img src="img/ok.png"/></a>
			<a href="#"><img src="img/facebook.png"/></a>
		</div>
	</nav>
		);
	}
}
export default Menu;