import React from 'react';
import Loto from './components/loto/loto';
import Lottery from './components/lottery/lottery';
import BlackJack from './components/blackjack/blackjack';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => <div className="App">
  <BrowserRouter>
    <div>
      <Route exact path="/loto" component={Loto} />
      <Route exact path="/lottery" component={Lottery} />
      <Route exact path="/blackjack" component={BlackJack} />
    </div>
  </BrowserRouter>
</div>;

export default App;
