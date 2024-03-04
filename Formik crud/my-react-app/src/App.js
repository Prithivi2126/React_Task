
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import List from './component/List';
import Reduxform from './component/Reduxform';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path='/form' element={<Reduxform />}></Route>
      <Route path='/list' element={<List/>}></Route>
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
