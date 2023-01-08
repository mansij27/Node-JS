import React,{useState} from "react";

function FrmStudReg(){
    
    const [inputs, setInputs] = useState({});
    const [txtFld, setTxtFld] = useState("Content of textarea");
    const [Course, setCourse] = useState("BCA");

    const handleChange = (event) => {
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=> ({...values,[name]:value}));
        setTxtFld(event.target.value);
        setCourse(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return(
       <div align="center">
        <b><h1><u> STUDENT REGISTRATION FORM </u></h1></b>
        <form onSubmit={handleSubmit}>
            <label> Enter your name:
                <input type="text" name="username" placeholder="Enter your name" value={inputs.username || ""} onChange={handleChange}/>
            </label>
            <br/>
            <br/>
            <label> Enter your age:
                <input type="text" name="age" placeholder="Enter your age" value={inputs.age || ""} onChange={handleChange}/>
            </label>
            <br/>
            <br/>
            <select value={Course} onChange={handleChange}>
                <option value="BCA"> BCA</option>
                <option value="BBA"> BBA</option>
                </select> 
            <br/>
            <br/>
            <textarea value={txtFld} onChange={handleChange} />
            <br/>
            <input type="submit"/>
        </form>
       </div>
    );
}

export default FrmStudReg;