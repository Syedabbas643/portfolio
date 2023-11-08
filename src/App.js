import About from "./components/About";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Home from "./components/Home";
import Navvv from "./components/Navvv";
import {Routes, Route ,useLocation } from "react-router-dom";
import Projects from "./components/Projects";


function App() {

  const location = useLocation()

  const getClassName = () => {
    const { pathname } = location;
    
    // Your custom logic to determine the className based on the pathname
    if (pathname === '/portfolio') {
      return 'homebg';
    } else if (pathname === '/portfolio/about') {
      return 'diffbg';
    } else if (pathname === '/portfolio/exp') {
      return 'diffbg';
    } else if (pathname === '/portfolio/hello') {
      return 'diffbg';
    }else if (pathname === '/portfolio/pro') {
      return 'diffbg';
    }
     else {
      return 'homebg';
    }
  };

  return (
    <div className={getClassName()} >
      <Navvv />
        <Routes>
            <Route path="/portfolio" element={<Home/>} />
            <Route path="/portfolio/pro" element={<Projects/>} />
            <Route path="/portfolio/about" element={<About/>} />
            <Route path="/portfolio/exp" element={<Exp/>} />
            <Route path="/portfolio/hello" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
