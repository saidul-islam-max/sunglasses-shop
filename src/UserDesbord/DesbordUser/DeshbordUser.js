import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Footer from '../../Pages/Footer/Footer';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import PreviewIcon from '@mui/icons-material/Preview';
import LogoutIcon from '@mui/icons-material/Logout';
import './DesbordUser.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UserProfile from '../UserProfile/UserProfile';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import UserReview from '../Review/UserReview';
import useAuth from '../../Pages/Hooks/useAuth';
import MakeAdmin from '../../AdminDesbord/MakeAdmin/MakeAdmin';
import AddProduct from '../../AdminDesbord/AddProduct/AddProduct';
import ManagOrder from '../../AdminDesbord/ManagOrder/ManagOrder';
import AdminRoute from '../../Pages/ProductDetails/AdminRoute/AdminRoute';

const drawerWidth = 240;

const DeshbordUser = (props) => {
  const {admin} = useAuth()
    const {logout} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      
      <Divider className="das-link text-center" />
          {!admin && <h4>USER DESHBOARD</h4>}
          {admin && <h4>Admin DESHBOARD</h4>}

    
      <Link to={`${url}/userprofile`}><Button variant="text" className="fw-bold"><SupervisedUserCircleIcon/> Profile</Button></Link><br/><br/>

      {admin && <Box>
        <Link to={`${url}/managOrder`}><Button variant="text"><SupervisedUserCircleIcon/> Manag Order</Button></Link><br/><br/>
        <Link to={`${url}/addproduct`}><Button variant="text" className="fw-bold"><SupervisedUserCircleIcon/> Add Product</Button></Link><br/><br/>
        <Link to={`${url}/makeadmin`}><Button variant="text" className="fw-bold"><SupervisedUserCircleIcon/> Make Admin</Button></Link><br/><br/>
        <Link to={`${url}/managproduct`}><Button variant="text" className="fw-bold"><SupervisedUserCircleIcon/> Manag Product</Button></Link><br/>
        
        </Box>}

      {!admin && <Box>
        <Link to={`${url}/MyOrder`} > <Button className=" fw-bold"><InboxIcon />  My Order</Button></Link><br/>
         <Link to={`${url}/payment`}> <Button variant="text" className=" fw-bold"><PaymentsIcon/> Payment</Button></Link><br/>
         <Link to={`${url}/review`}> <Button variant="text" className="fw-bold"><PreviewIcon/> Review</Button></Link>
        </Box>}
    
      <br/>
      <br/>
      <br/>
      <Link className="text-black mx-2 des-link fw-bold" to="/home"> <Button variant="text" className="fw-bold"><PreviewIcon/> Home</Button></Link>
      <button onClick={logout}><LogoutIcon/>Log Out</button>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DeshBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <UserProfile></UserProfile>
        </Route>
        <Route path={`${path}/userprofile`}>
           <UserProfile></UserProfile>
        </Route>
        <Route path={`${path}/myorder`}>
           <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/payment`}>
           <Payment></Payment>
        </Route>
        <Route path={`${path}/review`}>
           <UserReview></UserReview>
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
           <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
           <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/managorder`}>
           <ManagOrder></ManagOrder>
           </AdminRoute>
        <Route path={`${path}/`}>
           <UserReview></UserReview>
        </Route>
      </Switch>

      </Box>
    </Box>
  );
}

DeshbordUser.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DeshbordUser;
