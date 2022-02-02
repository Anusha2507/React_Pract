import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
// import Contact from "./components/Pages/Contact";
import Form from "./components/Form";
import PromiseDemo from './components/PromiseDemo';
import StudentsTable from './components/StudentsTable';
import { StudentContextProvider } from './store/StudentContext';
import CardMenu from './components/Pages/CardMenu';
import Temp from './components/WeatherApp/Temp';

function App() {
  
  return (
    <StudentContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/form" element={<Form/>}/> 
        <Route exact path= "/studenttable" element={<StudentsTable/>}/>
        <Route exact path="/promise" element={<PromiseDemo/>}/>
        <Route exact path="/card" element={<CardMenu/>}/>
        <Route exact path="/temp" element={<Temp/>}/>


      </Routes>
    </BrowserRouter>
    </StudentContextProvider>
    
  );
}

export default App;