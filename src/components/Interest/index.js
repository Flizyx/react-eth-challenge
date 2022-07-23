import React from 'react'

const Interest = ({interests}) => {
    return (
        <>
        <div className="InterestContainer">
            <div className="section">
            <h4>Intereses:</h4>
            <ul>
            {interests === undefined ? 'Loading...' : interests.map((interest,index) => {
                return (
                    <li className="AcademicContainer" key={index}>
                    {interest.charAt(0).toUpperCase() + interest.slice(1)}
                    </li>
                )
            })}
            </ul>
            </div>
        </div>
    </>
    )
}

export default Interest