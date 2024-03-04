import logo from './logo.svg';
import './App.css';
import StudentList from './component/StudentList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentDetails from './component/StudentDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/form' element={<StudentDetails />}></Route>
     <Route path='/form/:id' element={<StudentDetails />}></Route>
     <Route path='/list' element={<StudentList />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
