import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Products from './Pages/Produncts/Products';
import NavigationBar from './Pages/Shered/Navbar/NavigationBar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddProduct from './AdminDesbord/AddProduct/AddProduct';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import UserReview from './UserDesbord/Review/UserReview';
import ManagOrder from './AdminDesbord/ManagOrder/ManagOrder';
import DeshbordUser from './UserDesbord/DesbordUser/DeshbordUser';
import MyOrder from './UserDesbord/MyOrder/MyOrder';
import Footer from './Pages/Footer/Footer';
import Review from './Pages/Review/Review';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className=" ">
     <AuthProvider>
     <Router>
     
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
          <PrivateRoute path="/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/productDetails/:productDetailsId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          
          <Route path="/managorder">
            <ManagOrder></ManagOrder>
          </Route>
          <PrivateRoute path="/userDeshbord">
            <DeshbordUser></DeshbordUser>
          </PrivateRoute>
          <Route path="*">
           <NotFound></NotFound>
          </Route>
         
      </Switch>
   
  
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
