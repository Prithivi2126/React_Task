import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Product from './product/Product';
import Productlist from './product/Productlist';
import Form from "./classcom/Form";
import List from "./classcom/List";
import Reducerform from './reducer/Reducerform';
import Reducerlist from './reducer/Reducerlist';
import Password from './otp/Password';
import Usecontext from './usecontext/Usecontext';
import Context from './context api/Context';
import Process from './context api/Process';
import Contexttable from './usecontext/Contexttable';
import Invoice from './usecontext/Invoice';
import Captcha from './captcha/Captcha';
import Recaptcha from './recaptcha/Recaptcha';
import Usememo from './usememo/Usememo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      {/* <Route path='/form' element={<Product />}></Route> */}
      {/* <Route path='/list' element={<Productlist />}></Route> */}
      <Route path='/form/:id' element={<Product />}></Route>
      <Route path='/classform' element={<Form />}></Route>
      <Route path='/classform/:id' element={<Form />}></Route>
      <Route path='/classlist' element={<List />}></Route>
      <Route  path='/reduceform' element={<Reducerform />}></Route>
      <Route  path='/reduceform/:id' element={<Reducerform />}></Route>
      <Route path='/reducelist' element={<Reducerlist />}></Route>
      <Route path='/otp' element={<Password />}></Route>
      <Route path='/usecontext' element={<Usecontext />}></Route>
      <Route path='/count' element={<Process />}></Route>
     <Route path='/contexttable' element={<Contexttable />}></Route>
     <Route path='/invoice' element={<Invoice />}></Route>
     <Route path='/captcha' element={<Captcha />}></Route>
     <Route path='/recaptcha' element={<Recaptcha />}></Route>
     <Route path='/' element={<Usememo />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
