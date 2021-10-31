import HeaderContainer from './header/HeaderContainer';
import MostPopularProductList from './mostPopularProducts/MostPopularProductList';

const loginTitle = 'Login';
const registrationTitle = 'Registration';

const HomePage = () => {
  return (
    <div>
      <HeaderContainer />
      <MostPopularProductList />
    </div>
  );
};

export default HomePage;
