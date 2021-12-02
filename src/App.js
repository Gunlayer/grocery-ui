import HomePage from './pages/home/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import CartPage from './pages/cart/CartPage';
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';
import AdminPanelPage from './pages/adminPanel/AdminPanelPage';
import CheckoutPage from './pages/checkout/CheckoutPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/account/login">
          <LoginPage />
        </Route>
        <Route exact path="/account/logout">
          <Redirect to="/" />
        </Route>
        <Route exact path="/account/register">
          <RegistrationPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products/:productId">
          <ProductDetailsPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route
          exact
          path={['/admin/dashboard', '/admin/products', '/admin/users']}
        >
          <AdminPanelPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
