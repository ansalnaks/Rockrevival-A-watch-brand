import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CollectionPage from './components/CollectionPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path='/collections/:gender' element={<CollectionPage/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
