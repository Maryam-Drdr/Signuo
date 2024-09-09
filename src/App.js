
import './App.css';
import Header from './Pages/Header/Header';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';



function App() {
  return(
    <div className="App" >
      <Header />
      <Routes>
        <Route path='/register' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      
    </div>
  );
}

export default App;
