import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/home/meal-details/:idMeal' element={<MealDetails></MealDetails>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
