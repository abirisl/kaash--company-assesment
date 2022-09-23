import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner/Banner';
import Content from './Component/Content/Content';
import ProjectDesign from './Component/ProjectDesign';
import Technology from './Component/Technology/Technology';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <Content />
      <ProjectDesign />
      <Technology />
      <Contact />
    </div>
  );
}

export default App;
