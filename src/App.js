import './App.css';
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';


const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <div className='App-content'>
        <Routes>
          <Route path='/profile/' element={<Profile {...props} />}/>
          <Route path='/dialogs/' element={<Dialogs {...props} />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
