import './App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header'; 
import BiggerNewsHolder from './components/BiggerNewsHolder';
import SmallerNewsHolder from './components/SmallerNewsHolder';

function App() {
  return (
    <div>
     <Header/>
     <HelloWorld topic='KAUPUNKI' body='Näin Helsingin seudulla asuvien terveydenhoito muuttuu sote-uudistuksen vuoksi'/>
     <HelloWorld topic='PÄIVÄN TIMANTTI' body='Perheenäiti Virva Lehdolla ei ollut enää omaa aikaa – sitten hän päätyi osaksi poikkeuksellista asumis­kuviota, joka mullisti arjen'/> 
     <BiggerNewsHolder topic='News in Finland' body='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
     <BiggerNewsHolder topic='News in Finland 2' body='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'/>
     <SmallerNewsHolder  topic='Side news' body='Side News '/>
     
    </div>
  );
}

export default App;

