import React, { useState } from 'react';

const Form = (props) => {

    const options = ["people", "planets"];
    const [tempType, setTempType] = useState("people");
    const [tempId, setTempId] = useState(1);

    const [myForm, setMyForm] = useState({
        Type: "people",
        Id: 1
    })

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
        setTempType(e.target.value);
    }

    const onInputHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
        setTempId(e.target.value);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.setType(tempType);
        props.setMyId(tempId);
        props.setSubmitted(true);
    }

    return (
        <form onSubmit={onSubmitHandler} style={{height: "50px", width: "500px", backgroundColor: "#efefef"}}>
            <div style={{paddingTop: "7px"}} className="container mt-4">
                <div>
                    <label htmlFor="Type">Search for: </label>
                    <select onChange={onChangeHandler} name="Type" style={{minWidth: "175px", height: "30px", marginLeft: "10px"}}>
                        {
                            options.map((item, i) => {
                                return <option value={item} key={i}>{item}</option>
                            })
                        }
                    </select>
            
                    <label style={{marginLeft: "10px"}} htmlFor="Id">ID: </label>
                    <input onChange={onInputHandler} value={myForm.Id} type="number" name="Id" style={{width: "60px", marginLeft: "10px", marginRight: "10px"}}/>
                    <input  style={{width: "100px"}} className="btn btn-primary" type="submit" value="Search" />
                </div>
            </div>
        </form>
    )
}

export default Form;