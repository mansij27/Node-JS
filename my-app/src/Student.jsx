import Happy from './Happy.jpg';
import Sad from './Sad.jpg';
import React from 'react';

const Student = (props) => {
    return ( <div >
        <center >
        <h1 > Student Details </h1> 
        <p > Student name { props.name } </p>
        <p > Student phone { props.ph } </p>
        <p> Student Address {props.add} </p>
        <p> Marks m1 {props.m1} </p>
        <p> Marks m2 {props.m2} </p>
        <p> Marks m2 {props.m3} </p>
        <p> Student Total {Number(props.m1) + Number(props.m2) + Number(props.m3)} </p>
        <p> Student Average {Number(props.m1) + Number(props.m2) + Number(props.m3)/3} </p>
        <p> Result: {((Number (props.m1) + Number(props.m2) + Number(props.m3)) >=50 ? <span><img src={Happy} height="150" width="150"></img></span> : <span><img src={Sad}height="150" width="150"></img></span>)}</p>
        </center> 
        </div>
    );
}

export default Student;