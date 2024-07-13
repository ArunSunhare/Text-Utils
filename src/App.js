import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
// import TextForm from './componets/TextForm'
function App() {
  return (
   <>
   {/* <Navbar title="TextUtils" abouttext="About TextUtils"/>
   <Navbar /> */}
   <Navbar title='TextUtils' abouttext='About TextUtils'/>
   <div className="container my-3">
    {/* <TextForm heading='Enter the text to analyze below'/> */}
    <About/>

   </div>
   
   
    </>
  );
}
export default App;

 