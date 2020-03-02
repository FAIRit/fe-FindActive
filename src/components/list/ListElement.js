import React from 'react'

const ListElement = props => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.location}</div>
        </div>
    )
}

export default ListElement