import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { Cart } from './components/cart';
import { ProductList } from './components/productList';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

function App() {
  const navigate = useNavigate()

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    top: 1,
    border: '3px solid white',
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <div className="App">
      <AppBar position = "static">
      <Toolbar>
      <Button onClick={()=>navigate("/")} color="inherit">Home</Button>
      <Button onClick={()=>navigate("/products")} color="inherit">Products</Button>
      
      <Box sx={{ flexGrow: 1 }} />
      <Button onClick={()=>navigate("/cart")} color="inherit">Cart</Button>
        <IconButton color="inherit">
        <AddShoppingCartIcon/>
      </IconButton>
     
      </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes> 
    </div>
  );
}

export default App;
