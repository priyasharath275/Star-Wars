import React ,{useState} from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/components/header/Header';

import './src/styles/index.scss'
import Body from './src/components/Body/Body';

const MyApp = () => {
    const[toggle ,setToggle]=  useState(false)
    const clickhandlder = () =>{
        setToggle((prev) => !prev)
    }
 return( <div className='my_App'>
     <Header clickhandlder={clickhandlder}/>
   {toggle &&  <Body/>}
     
    </div>);
  }

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp/>);