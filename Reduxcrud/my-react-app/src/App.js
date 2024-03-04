import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reduxform from './component/Reduxform';
import Reduxlist from './component/Reduxlist';
import Invoice from './component/Invoice';
import Product from './component/Product';
import ProductList from './component/ProductList';
import { Table } from 'react-bootstrap';
import Sagalist from './component/redux-saga/Sagalist';
import Sagaform from './component/redux-saga/Sagaform';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/reduxform' element={<Reduxform />}></Route>
      <Route path='/reduxlist' element={<Reduxlist />}></Route>
      <Route path='/invoice' element={<Invoice />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/productList' element={<ProductList />}></Route>
      <Route path='/table' element={<Table />}></Route>
      <Route path='/sagalist' element={<Sagalist />}></Route>
      <Route path='/sagaform' element={<Sagaform />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
