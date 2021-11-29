import React, {useState, useEffect} from 'react';
import axios from 'axios'

const People = (props) => {

    const [peep, setPeep] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.Type}/${props.Id}/`)
        .then(response => setPeep(response.data))
        .catch(err => {
            setPeep(null)
        })
    }, [props.Type, props.Id])

    return (
        <div style={{backgroundColor: "#e6ffff"}} className="container">
        {peep ?
            <fieldset>
            <h2>{peep.name}</h2>
            <p><span>Height: </span>{peep.height}</p>
            <p><span>Mass: </span>{peep.mass}</p>
            <p><span>Hair Color: </span>{peep.hair_color}</p>
            <p><span>Skin Color: </span>{peep.skin_color}</p>
            <p><span>Eye Color: </span>{peep.eye_color}</p>
            <p><span>Gender: </span>{peep.gender}</p></fieldset>:
            <>
                <p>Estos no son los droides que estás buscando</p>
                <img className="col-12" src="https://i.pinimg.com/originals/bb/ad/9c/bbad9c1c3851d18931a4b0ac33cd5b1c.jpg"></img>
            </>
        }
        </div>
    )
}

export default People;