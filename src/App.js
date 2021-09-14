import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from "./components/About";


function App() {
  return (
    <>
    <Navbar title="Textutils" aboutTextutils="About Textutils"/>
    <div className="container">
      <TextForm heading="Enter your text here to be Analyzed"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;

