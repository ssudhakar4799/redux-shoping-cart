import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
// import Home from './components/home/Home';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import Home from './components/home/Home';
import Images from './components/Moreimages/Images';
import Addcard from './components/addcard/Addcard';
function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <BrowserRouter>
        {
          state?.auth?.isAuthentification ? (
            <>
              <ul className='nav justify-content-center navi'>
                <li>
                  <Link to='/Home'>Home</Link>
                </li>
                <li>
                  <Link to='/Images'>Images</Link>
                </li>
                <li>
                  <Link to='/Addcard'>Addcard</Link>
                </li>
                <li>
                  <Link to='/'>LOGIN</Link>
                </li>
              </ul>
              <Routes>
                <Route path='/Home' element={<Home />}>HOME</Route>
                <Route path='/Images/:id' element={<Images />}>Images</Route>
                <Route path='/Addcard' element={<Addcard />}>Addcard</Route>
              </Routes>
            </>
          ) : (
            <>
              <Routes>
                <Route path='/' element={<Login />}>HOME</Route>
                <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
              </Routes>
            </>
          )
        }

      </BrowserRouter>
    </div>
  );
}

export default App;
