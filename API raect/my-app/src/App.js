import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Studentform from './student/Studentform';
import Studentlist from './student/Studentlist';
import Otp from './otp/Otp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/form' element={<Studentform />}></Route>
     <Route path='/Studentlist' element={<Studentlist />}></Route>
     <Route path='/form/:id' element={<Studentform />}></Route>
     <Route path='/otp' element={<Otp />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
