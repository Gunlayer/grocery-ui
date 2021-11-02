import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/account/login">
          <LoginPage />
        </Route>
        <Route exact path="/account/register">
          <RegistrationPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
