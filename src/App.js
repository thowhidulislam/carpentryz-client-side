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
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import Payment from './Pages/Dashboard/Payment';
import ProfileDetails from './Pages/Dashboard/ProfileDetails';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Contactus from './Pages/Home/Contactus';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='editInfo' element={<ProfileDetails></ProfileDetails>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='allOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<CreateAccount></CreateAccount>}></Route>
        <Route path='contact' element={<Contactus></Contactus>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
