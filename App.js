import './App.css';
import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import Header from  './Components/Header.js'
import Textfields from './Components/Textfields.js'
import img from './Components/star-circles.jpg' 

function App() {
  return (
    <div>
        <Header />
        <img className = "image" src={img}/>          
        <Main />
        <Textfields />
        <Footer />
    </div>
  );
}

export default App;

