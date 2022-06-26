import './App.css';
import About from './component/About';
import React, {useState} from 'react';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import TextForms from './component/TextForms';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App(){
  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='#042743';
          showAlert("Dark mode has been enabled", "success");
          document.title='TextUtils-Dark Mode';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enabled", "success");
          document.title='TextUtils-Light Mode';
        }
      }
  return(
    <>
    <Router> 
     <Navbar title="MyWeb2" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Switch> 
            <Route path="/about" component={About}/>
              {/* <About/> */}
           <Route  path="/"> 
              <TextForms showAlert={showAlert} heading="Enter here" mode={mode}/>
            </Route> 
      </Switch>
       </div>
     </Router> 
    </>
  )
}
export default App;
// import './App.css';
// import Navbar from './component/Navbar';
// import TextForms from './component/TextForms';
// import About from './component/About';
// import React, {useState} from 'react';
// import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// function App() {
//   const[mode,setMode]=useState('light');
//   const[alert,setAlert]=useState(null);

//   const showAlert=(message,type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   }

//   const toggleMode=()=>{
//     if(mode==='light'){
//       setMode('dark');
//       document.body.style.backgroundColor='#042743';
//       showAlert("Dark mode has been enabled", "success");
//       document.title='TextUtils-Dark Mode';
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor='white';
//       showAlert("Light mode has been enabled", "success");
//       document.title='TextUtils-Light Mode';
//     }
//   }
//   return (
//   <>
//    <Router> 
//     <Navbar title="MyWeb2" mode={mode} toggleMode={toggleMode}/>
//     <Alert alert={alert}/>
//     <div className="container my-3">
//      <Switch> 
//            <Route exact path="/about">
//              <About/>
//           </Route>
//           <Route exact path="/"> 
//              <TextForms showAlert={showAlert} heading="Enter here" mode={mode}/>
//            </Route> 
//      </Switch>
//       </div>
//     </Router> 
//  </>
// );
// }
// export default App;