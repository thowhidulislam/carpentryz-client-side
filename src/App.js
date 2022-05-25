import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import CreateAccount from './Pages/Login/CreateAccount';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<CreateAccount></CreateAccount>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
