import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Objective from './components/Objective';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App lg:pl-7 lg:pr-7 sm:pl-2 sm:pr-2">
     <Heading/>
     <Objective/>
     <Education/>
     <Achievements/>
     <Skills/>
     <Project/>
     <Experience/>
    </div>
  );
}

export default App;
