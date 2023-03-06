//import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navbar"
import Hero from "./component/hero"
import Card from "./component/Card"
import data from "./data";


function App() {

  console.log("data",data[0])

   const cards =   data.map(carddata => {

    return (

      <Card data= {carddata}/>
    )
   }
    
    
    )
  return (

    <div className='App'>
     
     <Navbar/>
     
     <Hero/>
     
     
     <section className='cards-list'>{cards}</section>


    </div>
  );
}

export default App;
