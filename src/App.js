import React from 'react';

import './App.css';
//import NavbarPage from './components/navbar'
import CarouselPage from './components/topcarousel'
import Deal from './components/deal'
import Adcarousel from './components/adcarousel'
import Prodgrid1 from './components/prodgrid1'
import Prodgrid2 from './components/prodgrid2'
import Sixgrid from './components/6grid'
import Prodgrid3 from './components/prodgrid3'

function App() {
  return (
    
<div>
  {/* <NavbarPage></NavbarPage> */}
  <CarouselPage></CarouselPage>
  <br></br>
  <br></br>
   <Deal></Deal>
   <br></br>
  <br></br>
  <Adcarousel></Adcarousel>
  <br></br>
  
  <Prodgrid1></Prodgrid1>
  <Prodgrid2></Prodgrid2>
  <Sixgrid></Sixgrid>
  <Prodgrid3></Prodgrid3>



</div>
          
  );
}

export default App;
