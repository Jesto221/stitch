
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BackGroundVideo } from './components/Home/VideoBg';
import { AboutSection } from './components/About/AboutSecion';
import { Letter } from './components/Love_letter/love_letter';
import { DateRequests } from './components/Ask_here_out/ask_here_out';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <BackGroundVideo></BackGroundVideo>
      <AboutSection></AboutSection>
      <Letter></Letter>
      <DateRequests></DateRequests>
    </div>
  );
}

export default App;
