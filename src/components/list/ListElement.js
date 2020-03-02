import React from 'react'

const ListElement = props => {
    return (
        <div>
                  <img src={props.photo} style={{width: '500px', height: '300px'}}alt="gym photo"></img>

            <div>{props.name}</div>
            <div>{props.location}</div>
        </div>
    )
}

export default ListElement