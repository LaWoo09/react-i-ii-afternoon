import React from "react"


export default function Card(props) {
    const { data } = props
   
    let mappedData = data.map((item, index) => {
    return <div key={index}>
        <h1>{item.name.first} {item.name.last}</h1>
        <h3>From: {item.city}</h3>
        <h3>Job Title: {item.title}</h3>
        <h3>Employer: {item.employer}</h3>
        <ol> Favorite Movies:
            <li>{item.favoriteMovies[0]}</li>
            <li>{item.favoriteMovies[1]}</li>
            <li>{item.favoriteMovies[2]}</li>
        </ol>
    </div>
    })

    return <div className="Card">
       
           {mappedData[props.counter]}
           
            {props.counter < 25 ? <div><p>{props.counter + 1}/25</p></div>
            : <div>{props.counter}/25</div>}

    </div>
}