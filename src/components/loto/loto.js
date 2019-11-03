import React from 'react';
import Header from './header'
import Random from './random'
import Cards from './card'
import Win from './win'
import Menu from './menu'

class Loto extends React.Component{
  render(){
    return(
      <div>
      	 <Win/>
         <Menu/>
	      <Header/>
    	  <Random/>
    	  <Cards/>
      </div> 
    );
  }
}

export default Loto;
