import Home from './components/HomeComponent';
import Quiz from './components/QuizComponent';
import Result from './components/ResultComponent';
import './App.css';
import { Route,Routes} from "react-router-dom";

function App() {


  
  return (

    
    <div className="App">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>} />
    <Route path='/results' element={<Result/>}/>
  </Routes>
    </div>
  );
}

export default App;
