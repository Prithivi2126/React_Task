import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Auth from "./component/Auth";
import UnAuthorized from "./component/UnAuthorized";
import Layout from "./component/lay_out/Layout";
import Dashboard from "./component/lay_out/Dashboard";
import Sagalist from "./component/lay_out/Sagalist";
import Sagaform from "./component/lay_out/Sagaform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/unAuthorized" element={<UnAuthorized />}></Route>
          <Route path="/sagaform" element={<Sagaform />}></Route>
          <Route path='/sagaform/:id' element={<Sagaform />}></Route>
          <Route element={<Auth />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/" element={<Layout />}> </Route>
              <Route path="/sagalist" element={<Sagalist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
