import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Classrooms from './pages/Classrooms';
import Lessons from './pages/Lessons';
import Notes from './pages/Notes';
import Settings from './pages/Settings';
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {
  const [showPrimaryNavigation, setShowPrimaryNavigation] = useState(false);

  function handleMenuClick(){
    setShowPrimaryNavigation(!showPrimaryNavigation)
  }
  return (
    <div className="App">
      <Header  handleMenuClick={handleMenuClick}/>
      <Navigation showPrimaryNavigation={showPrimaryNavigation}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="classrooms" element={<Classrooms />} />
          <Route path="settings" element={<Settings />} />
          <Route path="lessons" element={ <Lessons/>} />
          <Route path="notes" element={<Notes />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
