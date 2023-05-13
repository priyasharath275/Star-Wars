import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/components/header/Header';
import Body from './src/components/Body/Body';
import './src/styles/index.scss'

const MyApp = () => (
    <div className='my_App'>
     <Header/>
     <Body/>
     
    </div>
  );

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp/>);