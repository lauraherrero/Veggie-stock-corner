import React from 'react';

/* --- STYLING --- */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/App.css';

/* --- IU COMPONENTS --- */
import NavBar from './ui/navbar/Navbar';

/* --- PAGE COMPONENTS --- */
import IndexPage from './pages/index/IndexPage';
import FoodsPage from './pages/foods-index/FoodsIndex';
import DetailsPage from './pages/foods-detail/FoodsDetail';

/* --- RRD COMPONENTS --- */
import {Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/foods" component={FoodsPage} />
      <Route path="/details/:foodId" component={DetailsPage} />
      <IndexPage />
      <FoodsPage />
      <DetailsPage />
    </Switch>
    </>
  );
}

export default App;
