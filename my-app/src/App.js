
import './App.css';

import Learnjs from './components/Learnjs';
import LearnProps from './components/LearnProps';
import LearnEvent from './components/LearnEvent';

function App() {
  let roll =1
  return (
    <div className="App">
   {/* <h1>Hello World</h1>
   <LearnComponent/> */}
   <Learnjs/>
   <Learnjs/>
   <LearnProps name="Rinku Maurya" jack={roll}/>
   <LearnEvent/>
   
    </div>
  );
}

export default App;
