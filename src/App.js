import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import Who from './components/whoweare/who';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/who-we-are' element={<Who/>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
