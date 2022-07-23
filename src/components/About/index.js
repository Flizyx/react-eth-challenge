import React from 'react'

const About = (props) => {
    console.log(props)
    return (
        <>
            <p>{props.data.profession}</p>
        </>
    )
}

export default About