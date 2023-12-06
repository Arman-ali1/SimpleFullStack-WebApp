import { useEffect, useState } from 'react'

// import Home from './components/Home.jsx';
// import Resister from './components/Resister.jsx';
import Footer from './components/footer.jsx';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
// import Practice from './components/Practice.jsx';


function App() {
  const [count, setCount] = useState(0)
  // const [regTogal,setRegTogal] = useState(false);
  // function reg(){
  //   setRegTogal(!regTogal);
  //   console.log(regTogal);
  // }
  // useEffect(()=>{
    // setReg(!regTogal);
  // },[regTogal,setReg])
  return (
    <>
      <h1 className=''>CoderSquade</h1>
      {/* <Practice></Practice> */}
      <NavBar>  </NavBar>
      <br></br>
      <div >
        
        {/* <Resister></Resister> */}
        {/* <button type="submit" onClick={reg} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button> */}
        <br></br>
        <Footer></Footer>  
      </div>
    </>
  )
}

export default App
