import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import Who from './components/whoweare/who';
import What from './components/what/what';
import Contact from './components/contactus/contact';
import Projects from './components/projects/projects';
import Cron from './components/cron apartment/cron';
import Blog from './components/blog/blog';
import Thoughts from './components/thought/thought';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/who-we-are' element={<Who/>} ></Route>
        <Route path='/what-we-do' element={<What/>} ></Route>
        <Route path='/get-in-touch' element={<Contact/>} ></Route>
        <Route path='/our-projects' element={<Projects/>} ></Route>
        <Route path='/cron-apartment' element={<Cron/>} ></Route>
        <Route path='/blog' element={<Blog/>} ></Route>
        <Route path='/how-to-shape-your-life-with-the-power-of-thoughts' element={<Thoughts/>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
