import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/components/header/Header';

import './src/styles/index.scss'
import Body from './src/components/Body/Body';

const MyApp = () => (
    <div className='my_App'>
     <Header/>
     <Body/>
     
    </div>
  );

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp/>);