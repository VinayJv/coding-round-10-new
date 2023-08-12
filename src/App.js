import './App.css';
import { Routes,Route } from "react-router-dom";
import { Homepage } from './pages/Homepage';
import { Departments } from './pages/Departments';
import { useNavigate } from 'react-router-dom';
import { Singledepartment } from './pages/Singledepartment';
import { Products } from './pages/Products';
import { Singleproduct } from './pages/Singleproducts';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className='nav-bar'>
        <div className='nav-items' onClick={()=>navigate("/")}><p>Dashboard</p></div>
        <div className='nav-items' onClick={()=>navigate("/departments")}><p>Departments</p></div>
        <div className='nav-items' onClick={()=>navigate("/products")}><p>Products</p></div>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/departments' element={<Departments />}></Route>
        <Route path='/departments/:departmentName' element={<Singledepartment />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:productName' element={<Singleproduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
