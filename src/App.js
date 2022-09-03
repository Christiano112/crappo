import './App.css';
import Earn from './Components/earn';
import Main from './Components/main';
import Market from './Components/market';
import Mine from './Components/mine';
import Nav from './Components/nav';
import Trade from './Components/trade';
import Why from './Components/why';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Why />
      <Earn />
      <Trade />
      <Market />
      <Mine />
      <Footer />
    </div>
  );
}

export default App;
