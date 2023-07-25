
import './App.css';
import Admin from './components/Admin'
import Tables from './components/Tables'
import Createuser from './components/Createuser'
import Dashboard from './components/Dashboard/index'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Admin />} path='/' />
          <Route element={<Tables />} path='/Tables' />
          <Route element={<Createuser />} path='/Adduser' />
          <Route element={<Dashboard />} path='/Dashboard' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
