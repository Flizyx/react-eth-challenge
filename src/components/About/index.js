import React from 'react'

const About = (props) => {
    // console.log(props,'About')
    return (
        <>
            <p>{props.data.profession}</p>
            <span><i>Cel:</i> {props.data.phone}</span>&ensp;&ensp;
            <span><i>Email:</i> {props.data.email}</span>&ensp;&ensp;
            <span><i>Website:</i> {props.data.website}</span>
            <p><i>Address:</i> {props.data.address}</p>
        </>
    )
}

export default About