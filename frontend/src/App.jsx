import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import News from './pages/News';
import Blogs from './pages/Blogs';
import Forums from './pages/Forums';
import Navbar from './components/Header';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/forums' element={<Forums/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
