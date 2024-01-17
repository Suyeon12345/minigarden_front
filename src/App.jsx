import { Route, Routes } from 'react-router-dom';
import Garden from './garden/page/Garden';
import Home from './common/page/Home';
import Navbar from './common/component/Navbar';
import Flower from './flower/page/Flower';
import Angel from './angel/page/Angel';
import Card from './card/page/Card';
import Lsg from './lsg/page/Lsg';
import Footer from './common/component/Footer'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/garden" exact={true} element={<Garden/>}/>
        <Route path="/flower" exact={true} element={<Flower/>}/>
        <Route path="/angel" exact={true} element={<Angel/>}/>
        <Route path="/card" exact={true} element={<Card/>}/>
        <Route path="/lsg" exact={true} element={<Lsg/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
