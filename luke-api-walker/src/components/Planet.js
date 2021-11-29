import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Planet = (props) => {

    const [peep, setPeep] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.Type}/${props.Id}/`)
        .then(response => setPeep(response.data))
        .catch(err => {
            setPeep(null)
        })
    }, [props.Type, props.Id])

    return (
        <div style={{backgroundColor: "#e9c7fd"}} className="container">   
        {peep ?
            <fieldset>
            <h1>{peep.name}</h1>
            <p><span>Climate: </span>{peep.climate}</p>
            <p><span>Terrain: </span>{peep.terrain}</p>
            <p><span>Surface Water: </span>{peep.surface_water}</p>
            <p><span>Population:</span> {peep.population}</p></fieldset>:
            <>
            <p>These aren't the droids you're looking for</p>
            <img className="col-12" src="https://assets1.ignimgs.com/2017/03/02/kenobi-1280-1488494010895.jpg?width=1280"></img>
        </>
    }
        </div>
    )
}

export default Planet;