import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculation from './component/Calculation';
import Calculationtwo from './component/Calculationtwo';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/calculation' element={<Calculation />}></Route>
      <Route path='/two' element={<Calculationtwo/ >}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
