// import logo from './logo.svg';
import { About, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, Menu} from './containers';

import './App.css';
import { Navbar } from './components';

function App() {
  return (
    <div>
    <Navbar/>
    <Header />
    <About />
    <Menu />
    
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
    </div>
  );
}

export default App;
