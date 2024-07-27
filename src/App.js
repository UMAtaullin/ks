import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'


const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <div className='App-content'>
        <Routes>
          <Route path='/profile/' 
          element={<Profile 
            // store={props.store}
            />}/>
          <Route path='/dialogs/' 
          element={<DialogsContainer
            // store={props.store}
            />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

