import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import Who from './components/whoweare/who';
import What from './components/what/what';
import Contact from './components/contactus/contact';
import Projects from './components/projects/projects';
import Cron from './components/apartment projects/cron';
import Cross from './components/apartment projects/cross';
import Park from './components/apartment projects/edge_park';
import Edge from './components/apartment projects/edge';
import Harlet from './components/apartment projects/harlet';
import Twin from './components/apartment projects/twin';
import Blog from './components/blog/blog';
import Thoughts from './components/blog post/thought';
import Poverty from './components/blog post/poverty';
import Mistakes from './components/blog post/mistakes';
import Houses from './components/blog post/houses';
import Future from './components/blog post/future';
import Crypto from './components/blog post/crypto';
import Terms from './components/terms/terms';
import Privacy from './components/privacy/privacy';
function App() {
  return (
    <div className="App" >
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/who-we-are' element={<Who/>} ></Route>
        <Route path='/what-we-do' element={<What/>} ></Route>
        <Route path='/get-in-touch' element={<Contact/>} ></Route>
        <Route path='/our-projects' element={<Projects/>} ></Route>
        <Route path='/cron-apartment' element={<Cron/>} ></Route>
        <Route path='/cross-apartments' element={<Cross/>} ></Route>
        <Route path='/the-edge-car-park' element={<Park/>} ></Route>
        <Route path='/the-edge' element={<Edge/>} ></Route>
        <Route path='/harlet' element={<Harlet/>} ></Route>
        <Route path='/the-twin-tower' element={<Twin/>} ></Route>
        <Route path='/blog' element={<Blog/>} ></Route>
        <Route path='/how-to-shape-your-life-with-the-power-of-thoughts' element={<Thoughts/>} ></Route>
        <Route path='/5-ways-to-break-out-of-poverty' element={<Poverty/>} ></Route>
        <Route path='/first-time-home-buyer-mistakes' element={<Mistakes/>} ></Route>
        <Route path='/reason-why-people-build-houses' element={<Houses/>} ></Route>
        <Route path='/the-future-of-housing-in-the' element={<Future/>} ></Route>
        <Route path='/the-crypto-you-should-invest-in' element={<Crypto/>} ></Route>
        <Route path='/terms-of-service' element={<Terms/>} ></Route>
        <Route path='/privacy-policy' element={<Privacy/>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
