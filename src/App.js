import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/cartContext';
import {  LoginProvider } from './context/LoginContext';
import { RoutesApp } from './routes/RoutesApp';

function App() {
  
  return (
    <LoginProvider>
    <CartProvider>
    <RoutesApp/>
    </CartProvider>
    </LoginProvider>
 
  );
}

export default App;