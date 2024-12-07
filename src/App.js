import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/user/create' element={ <CreateUser/> }/>
        <Route path='/user/update' element={ <UpdateUser/> }/>
      </Routes>
    </Router>
  );
}

export default App;