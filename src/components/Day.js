import React from 'react'

const Day = ({day, month, year}) => {
    return (
        <div className="day">
            <h1>{day}/{month}/{year} </h1>
        </div>
    )
}

export default Day
