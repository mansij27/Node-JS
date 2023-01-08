import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Flag from './Flag1';
// import Student from './Student';
// import Counter from './Count';
// import Greetings from './Greet';
// import FunState from './countHooks';
// import FrmStudReg from './StudForm';
// import Factorial from './Factorial';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Flag/>
       {/* <Greetings/>  */}

    {/* // <div id="CounterEle"> */}
    {/* //        <Counter id='first' initVal='10'/> */}
    {/* //        <Counter id='sec'/> */}
    {/* // </div> */}
    {/* <App/> */}
    {/* // <Student name="Mansi" ph="123456789" m1="77" m2="98" m3="89" /> */}
    {/* // <FunState/> */}
    {/* <FrmStudReg/> */}
    </div>

    // <Factorial/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();